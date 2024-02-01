import requests
from bs4 import BeautifulSoup

# The URL of the main page with a list of articles
url = "https://www.thehindu.com/"

# Send an HTTP GET request to the main page
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content of the main page
    main_page_soup = BeautifulSoup(response.text, 'html.parser')

    # Find and extract links to individual articles
    article_links = main_page_soup.find_all('a', class_='story-card75x1-text')

    # Loop through the article links and scrape the content
    for link in article_links:
        article_url = link['href']

        # Send an HTTP GET request to the article page
        article_response = requests.get(article_url)

        if article_response.status_code == 200:
            # Parse the HTML content of the article page
            article_soup = BeautifulSoup(article_response.text, 'html.parser')

            # Extract and print the article title and content
            article_title = article_soup.title.text
            print("Article Title:", article_title)

            # Extract and print the article content
            article_content = article_soup.find('div', class_='article')
            if article_content:
                article_text = article_content.get_text()
                print(article_text)
            else:
                print("Article content not found on this page.")

            # Add a separator between articles
            print("\n" + "=" * 50 + "\n")
        else:
            print("Failed to retrieve the article. Status code:", article_response.status_code)

else:
    print("Failed to retrieve the main page. Status code:", response.status_code)
