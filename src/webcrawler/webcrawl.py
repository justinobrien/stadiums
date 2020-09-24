import requests
from bs4 import BeautifulSoup
from dl import download

result = requests.get("https://www.ufc.com/events")

src = result.content

soup = BeautifulSoup(src, "lxml")

hero_image = soup.find(class_="c-hero__image")
hero_headline = soup.find(class_="c-hero--full__headline is-large-text")
hero_date = soup.find(class_="c-hero__headline-suffix tz-change-inner")

print(hero_image.get('src'))
print(hero_headline.text.strip())
print(hero_date.text.strip())

download(hero_image.get('src'), './ufcImages')