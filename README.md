# Hatch-a-Match
[Ready to get started matching? Click here to head to our website!](https://haley.github.io/hatchamatch/ "Hatch-a-Match")



#### Introduction

___________

In universities across the country, on-campus organizations use mentoring programs called “bigs” and “littles” to help match up new members with more seasoned members of their organizations. This process helps the newer members to feel more at home in the organization. Many organizations designate one person or a committee of people to help decide on a pairing for the bigs and littles. This process comes with biases towards people that the organizers know the best. It also generates complexities from not having an equal number of potential bigs and littles. Hatch-a-Match seeks to eliminate the biases and complexities from this process by automating a matching system from an easy-to-use web app. In the matching process, the algorithm will automatically match any two people who ranked each other as top choice. The rest of the matching process uses a genetic algorithm to sort which of the matchings are better than others. The current goal of the project is to allow organizers an easy and efficient way to input the preferences of their participants, and in return receive a potentially great matching.



#### Our Story

_____

The idea for Hatch-a-Match was sparked after listening to a friend story about how messy the big-little matching process in her sorority was. People would preference each other as top choice and still would not get paired. The organizer was having a very rough time matching people together because there was so much information and so many possible pairings. That sparked a thought, why not automate the process? If all that organizers are looking at is numbers and ranks, why not simplify the whole process by having a computer do it, very similarly to how a person would go about it (with a few optimizations here and there).



#### How does it work?

____

The first part of the process starts by automatically matching people who have put each other as preference number 1. The rest of the process works by using a genetic algorithm to generate good matchings and then cull them down to the best matchings.

![Genetic algorithm diagram](./resources/geneticdiagram.png)

