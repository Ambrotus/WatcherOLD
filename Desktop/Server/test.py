import sys
import pyautogui
import cv2
from PIL import ImageGrab
print('this is pythion!')
pyautogui.size()
##(1920, 1080)
width, height = pyautogui.size()
print("Hello World")
print(height)
print(width)



pyautogui.moveTo(500, 800, duration=2)


xyz = pyautogui.locateOnScreen('gameISready.jpg',grayscale=True)
print(xyz)
#  pyautogui.moveTo(x,y)


# print(top)
# print(width)
# print(height)
# print(width)




sys.stdout.flush()
