# 10.0 Software Test Plan

#### Outline of Software Test Plan

10.1 Unit Test Plan

10.1.1 Unit Test Descriptions

10.2 Integration Test Plan

10.2.1 Integration Test Descriptions



### 10.1 Unit Test Plan

The unit tests will be an important portion of Big-Little. These will ensure Big-Little is running properly. 

#### 10.1.1 Unit Test Description

The following section describes tests.

#####**CSV Parser**

​	10.1.1.1 Unit Test 1

​		Test that the input form can be parsed.

​	10.1.1.2 Unit Test 2

​		Test that the input form parser deals with misformed input well.

##### **Participant**

​	10.1.1.3 Unit Test 3

​		Test that the participant class can create a new participant.

​	10.1.1.4 Unit Test 4

​		Test that the participant class can get and set preferences lists.

#####**Fitness**

​	10.1.1.5 Unit Test 5

​		Test that automatches are correctly matched.

​	10.1.1.6 Unit Test 6

​		Test bigs getters.

​	10.1.1.7 Unit Test 7

​		Test littles getters.

​	10.1.1.8 Unit Test 8

​		Test fitness of single match.

​	10.1.1.9 Unit Test 9

​		Test fitness of list.

#####**Email**

​	10.1.1.10 Unit Test 10

​		Test that emails are sending.

​	10.1.1.11 Unit Test 11

​		Test that emails send to the correct people.

### 10.2 Integration Test Plan

#### 10.2.1 Integration Test Descriptions

The following section describes tests specific to interactions with the front end and algorithms output.

#####10.2.1.1 Integration Test 1

​	Test that the front end is displaying the correct information.

#####10.2.1.2 Integration Test 2

​	Test that when a matches list is submitted it will return and email out the list of matches.

##### 10.2.1.3 Integration Test 3

​	Test that when a unequal number of bigs and littles is submitted, the algorithm still works.