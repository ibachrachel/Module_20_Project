# Final Project: Collaborate Capstone
### Group Number 5: Saturday Night Five

## Presentation 

[Link to Google Slides Presentation](https://docs.google.com/presentation/d/1YMWFu4EWW-TqpLAgISpPaUMpxWWm84ooTI_JyVNc4Eo/edit?usp=sharing)


- Selected Topic: Life Expectancy

- Reason for Topic: Throughout the centuries, life expectancy has increased due to improvements made to the environment in which a population lives in. This increase in life expectancy can be accounted for be analyzing factors that might contribute to a healthier life, such as economical factors, social factors, and mortality factors. 

- Description of Data Source: Both datasets come from the World Health Organization (WHO) and they cover the most recent health statistics of the world. One dataset  includes various indicators of health and the percentages of individuals with access to these factors. The second dataset includes information about how life expectancy has increased or decreased in countries around the world. 

a. Life Expectancy (WHO) https://www.kaggle.com/datasets/kumarajarshi/life-expectancy-who 

b. World Health Statistics 2020 https://www.kaggle.com/datasets/utkarshxy/who-worldhealth-statistics-2020-complete?select=safelySanitization.csv

![World LE](https://user-images.githubusercontent.com/102566199/186822449-9c7a764e-22c5-400f-845a-daea252d9074.png)


*Questions to Answer*
 
a. Which countries have an increase in life expectancy? Which countries did not?

b. Out of the countries with life expectancy changes, which factors affected this statistical the most?

c. Going forward, humanitarian efforts can be focused on what areas of the world? And, what factors showed the most effect on world health. 

- Data Exploration: 193 countries were represented in the dataset, while 195 exist in the world. The only two that are not recognized will NOT affect the analysis. Rows that were found to have high amounts of null values were dropped. Data was converted to a long format to allow for easy merging. All the countries have multiple years that are considered, which allows a relationship between Life Expectancy and other factors to be displayed throughout time. Running some initial analysis showed that there was high collinearity among some rows such as: infant deaths and Morality under 5. This is displayed with a resulting value of a collinearity of over 0.9 and a heat map showing that there were representing too much of the same data, which is reasonable for the two factors. 

- Data Analysis: While building the data analysis, columsn were added to the Life Expectancy dataset to increase the amount of factors that could be considered. These columns came from the Santiation files initially discussed. The data was displaying some outliers when scaling the data for the machine learning model. The min-max scaling option was displaying some serious outliers. This was further demonstrated by the drafted Tableau visualizations that were created to check on this trend. The preliminary analysis yielded 5 main factors with the highest affect on Life Expectancy: BMI, Schooling, Commposition of Resources, Adult Morality, and Infant Deaths. Many of the visualizations used to better understand that data found a positive correlation between the increase in Santiation factors and the increase in Life Expectancy. 

## GitHub

*Communication Protocols*

Communication will take place through the Slack chat and requires each group member to contribute to the conversation regularly. 
In the case of emergency, the member will be contacted through their personal email. Everyone shall clearly communicate what they plan to work on and complete between class meetings. 

*Branching*

Each group member has made a branch that they will submit changes from, which are then merged to the main. Different topics and actions will be seperated via new branches being made. Only functional code, documentation, and resources will be merged directly with the main immediately. 

------------------------------------------------------
*Group Roles*

Square: The team member in the square role will be responsible for the repository. 

- Rachel 

Triangle: The member in the triangle role will create a mockup of a machine learning model. This can even be a diagram that explains how it will work concurrently with the rest of the project steps.

- Scott

Circle: The member in the circle role will create a mockup of a database with a set of sample data, or even fabricated data. This will ensure the database will work seamlessly with the rest of the project.

- Stephen

X: The member in the X role will decide which technologies will be used for each step of the project.

- Teddi


## Machine Learning Model

- takes in data from provisional database
- outputs label for input data

a. Preliminary Data Preprocessing: The null values were really causing the model to not extremely reliable. The first try gave us an extremely high value of accuracy, but there were too many rows that had been dropped (due to too many null values) for this to be trusted. Instead, the missing data was pulled from a multitude of WHO datasets to be able to piece the information back together. Once this was complete, the data was able to create a preliminary model that could be trusted. The accuracy was lower, but that was to be expected at this point.

b. Engineering and Feature Selection: The model that was to be used for a multiple linear regression model, which would be a supervised model that took into account many factors. This was chosen so that the santiation factors' effects could be closely mapped. This was working initially, but as the project progressed it became apparent that we might need to move to a single linear regression model so that the result could be clearly communicated with our audience. 

c. Splitting in to Testing and Training Sets: We split the training set away from the testing set by testing the model without the santiation factors and then with the santiation factors for the testing set. If this was unsuccessful, then it would need to be adjusted to perhaps only include the older data in the training set and then use the newer data for the testing set. This could be possible because there is data for each country for many years, ranging from 2008  to 2015.

d. Explanation of Model Choice: The benefits for the multiple linear regression model is that it can be used to test multiple factors at once, but the biggest downside is that the visualizations that were generated with our data was not clean and easy to understand. 

## Database Integration

- Sample data that mimics the expected final database structure or schema
- Draft machine learning model is connected to the provisional database

a. Static Data Storage: a combination of AWS and pgAdmin are used to create a solid database to pull from 

b. Database connection: the database is connected to pgAdmin from AWS using the endpoint connection point to import this

c. Tables: There were tables created for every factor of Santiation being considered (ex. Handwashing, Santiation Services, Clean Water). This was used so that they could be displayed individually and then merged easily together

## Dashboard

- Google Slides, Tableau, and HTML Webpage
[Tableau Public Link](https://public.tableau.com/views/CapstoneProject_16619160092110/Storyboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link) 

The webpage will collect all of our information and display it for the final presentation. The interactive elements will include our data display, our map, the Tableau visualizations, and our presentation through Google Slides. Our webpage is hosted through GitHub Pages and is currently formatted to be scrollable in a mobile format, but will be tested for best display option. 


## Project Timeline

![Project_Timeline](https://user-images.githubusercontent.com/102566199/187097436-851339f6-3102-4f8c-9c02-b3678c454c93.png)
