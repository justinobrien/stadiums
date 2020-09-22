import requests
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET

result = requests.get("https://www.ufc.com/events")

"""print(result.status_code)"""

src = result.content

soup = BeautifulSoup(src, "html.parser")

divs = soup.find_all("img")

print(divs)