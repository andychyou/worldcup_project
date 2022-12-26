from bs4 import BeautifulSoup
import requests

search_keyw = '카타르'
raw = requests.get('https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022/scores-fixtures?country=KR&wtw-filter=ALL', headers={'User-Agent':'Mozilla/5.0'})
html = BeautifulSoup(raw.content, "html.parser") 
print(html.find('#root > main > div > section.where-to-watch-section_container__2mCfs.ff-pt-16.ff-pt-md-32.ff-pt-lg-48.ff-pt-xl-56 > div > div:nth-child(2) > div:nth-child(1) > div > div.row > div:nth-child(2) > div > div > div > a > div > div.col-12 > div > div.wtw-teams-horizontally-component_team1__3bRzY > div > div.wtw-teams-horizontally-component_TeamName__2lZ2s.ff-mb-0.ff-ml-4'))
