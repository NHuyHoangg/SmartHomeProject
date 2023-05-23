import random
import sys
import time
import serial.tools.list_ports

from Adafruit_IO import MQTTClient

AIO_FEED_IDS = ["dhl-status", "dhl-led-1", "dhl-led-2", "dhl-fan", "dhl-rem"]
AIO_USERNAME = "luonghoangk20"
AIO_KEY = "aio_pEMO90MCo0frln3gBZbQmQkPJ3bv"


def connected(client):
    print("Ket noi thanh cong...")
    for feed in AIO_FEED_IDS:
        client.subscribe(feed)


def subscribe(client, userdata, mid, granted_qos):
    print("Subcribe thanh cong...")


def disconnected(client):
    print("Ngat ket noi...")
    sys.exit(1)


def message(client, feed_id, payload):
    print("Nhan du lieu: " + payload)
    if isMicrobitConnected:
        ser.write((str(payload)).encode())


client = MQTTClient(AIO_USERNAME, AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()


def getPort():
    ports = serial.tools.list_ports.comports()
    N = len(ports)
    commPort = "None"
    for i in range(0, N):
        port = ports[i]
        strPort = str(port)
        if "USB-SERIAL CH340" in strPort:
            splitPort = strPort.split(" ")
            commPort = (splitPort[0])
    return commPort


isMicrobitConnected = False
if getPort() != "None":
    ser = serial.Serial(port=getPort(), baudrate=115200)
    isMicrobitConnected = True


def processData(data):
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    print(splitData)
    try:
        if splitData[0] == "STATUS":
            client.publish("dhl-status", splitData[1])
        if splitData[0] == "LED_AUTO":
            client.publish("dhl-led-auto", splitData[1])
        if splitData[0] == "REM":
            client.publish("dhl-rem", splitData[1])
        if splitData[0] == "FAN":
            client.publish("dhl-fan", splitData[1])
        if splitData[0] == "LED1":
            client.publish("dhl-led-1", splitData[1])
        if splitData[0] == "LED2":
            client.publish("dhl-led-2", splitData[1])

        if splitData[0] == "TEMP":
            client.publish("dhl-temp", splitData[1])
        if splitData[2] == "HUMI":
            client.publish("dhl-humi", splitData[3])
        if splitData[4] == "LIGHT":
            client.publish("dhl-light", splitData[5])
        if splitData[6] == "GAS":
            client.publish("dhl-gas", splitData[7])
    except:
        pass


mess = ""


def readSerial():
    bytesToRead = ser.inWaiting()
    if (bytesToRead > 0):
        global mess
        mess = mess + ser.read(bytesToRead).decode("UTF-8")
        while ("#" in mess) and ("!" in mess):
            start = mess.find("!")
            end = mess.find("#")
            processData(mess[start:end + 1])
            if (end == len(mess)):
                mess = ""
            else:
                mess = mess[end+1:]


cnt = 0;

while True:
    if cnt == 0:
        client.publish("dhl-status", 0)
        cnt=cnt+1
    if isMicrobitConnected:
        readSerial()
    time.sleep(1)
    # client.publish("dhl-temp", "25")
    # time.sleep(10)
