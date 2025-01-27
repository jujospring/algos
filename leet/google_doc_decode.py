import requests
from bs4 import BeautifulSoup

def decode_secret_message(doc_url):

  html_response = requests.get(url=doc_url)

  # parsing doc as html into BeautifulSoup obj
  soup = BeautifulSoup(html_response.text, 'html.parser')

  table = soup.find('table')

  x_coordinates = []
  characters = []
  y_coordinates = []

  for idx, row in enumerate(table.find_all('tr')):
    #skipping header
    if idx == 0:
      continue
  
    columns = row.find_all(['th', 'td'])

    if len(columns) == 3:
    #get each column and strip whitespace
      x_coordinates.append(columns[0].text.strip())
      characters.append(columns[1].text.strip())
      y_coordinates.append(columns[2].text.strip())

  #get dimensions
  max_x = int(max(x_coordinates))
  max_y = int(max(y_coordinates))
  
  #empty grid to print on
  grid = [[' ' for x in range(max_x + 1)] for y in range(max_y + 1)]
  
  #print character at correct coordinates
  for i in range(len(x_coordinates)):
    x = int(x_coordinates[i])
    y = int(y_coordinates[i])
    char = characters[i]
    grid[y][x] = char

  #printing in reverse because (I think?) the message is upside down based on the font of the "W"
  for row in reversed(grid):
    print(''.join(row))


if __name__ == "__main__":
  decode_secret_message("https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub")