SEI-39 Project 2
Title: Search For Quotes

////////////////////////////
Project Summary:

Search For Quotes enables users to search for quotes by entering either the person's name, or keywords from the contents of a quote. Additional details like the person's name and quote length (word count) are also available. They can also generate random quotes from the API's database, or create their own custom quote using their own inputs. Quotes retrieved from all 4 sources can all be added to a favourites list. Data within the favourites list is stored within local storage, allowing the data to persist through page refreshes.

////////////////////////////
Technologies Used

- React: propping, lifting state, useState, useRef, useEffect, localStorage
- Bootstrap
- CSS
- Fetch method for API data

////////////////////////////
Wireframes

See attached image project_two_diagram.jpg

////////////////////////////
User Stories

User must be able to:

- Search for quotes using 'name' input
- Search for quotes using 'content' input
- Expand results to show more details
- Generate random quote from API database
- Create own quote by inputting name, quote content & tag(s)
- Add quotes from all sources into favourites list
- Sort favourites list based on certain properties
- Remove entries from favourites list
- Access previously-saved favourites list even after refreshing

////////////////////////////
Problem Solving Strategies

I determine which components or functions can be reused, and store these within <App /> to be propped down accordingly. The wireframe proved to be very helpful to envision and set up the necessary application structure. I identify the states that would be required, firstly to search for the necessary data from the API, and secondly to toggle between the searchbox & results whenever the data has been fetched from the API.

There is also an additional state to detect if a search has been completed but did not receive any data from the API, which would then route into a separate error screen.

I used a map function to iterate through the returned arrays from the API database, and display the data in my desired format. Additional states are also added to allow entries to be added and/or removed from the favourites list.

////////////////////////////
Unsolved Problems

There is no alert to indicate that an entry has been added to the favourites list.

There is currently no database for 'create a quote', the created quote is lost whenever you navigate to another page.

////////////////////////////
APIs Used

I used the Quotable API to set up the application's functionality. The API allows me to search for quotes based on different inputs (author or content keywords), and also provides additional functionality to fetch random quotes from the database. Additional API information, such as tags, are also useful to help me further flesh out the app and display more information.

////////////////////////////
Acknowledgements

Quotable API: https://github.com/lukePeavey/quotable
Favicon: https://www.icons8.com
