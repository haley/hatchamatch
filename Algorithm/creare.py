import math
import random
import heapq

bigs = ["Paige Walker", "Isabella Andreoni", "Nicole Villa",
        "Micah Jordan", "Blake Jackson", "Mikey Yang", "Matthew Berdiago",
        "Breelyn Betts", "Anna Zagorski", "Lily Do", "Kyle Wilson",
        "Amanda Meegan", "Matthew Low", "Emily Vees", "Leigh Lewis",
        "Athena Giron", "Nolan Jacobs Walker", "Evan Velastegui", "Nadia Lowe"]

littles = ["Sarah Nguyen", "Seth Bakke", "Molly Brown", "Lauren Straub",
           "Marina Davis", "Anna Mueller", "Devan Hoston-Turner",
           "Kayla Morgan", "Alex Moore", "Sophia Farland", "Tulsi Shah",
           "Michelle Pak", "Megan West", "Matthew Soriano",
           "Robert Asmar", "Natalia Hernandez", "Madeline Connell",
           "Lorraine Gardner"]

stationary_group = []

final_matchings = {}

class Matching:
    def __init__(self, order, score):
        self.order = order
        self.score = score

    def __repr__(self):
        return str(self.order) + " : " + str(self.score)

    def __lt__(self, other):
        return self.score < other.score

class Person:
    def __init__(self, name, id, position):
        self.name = name
        self.id = id
        self.position = position
        self.prefs = []

    def __repr__(self):
        return self.name[0:3]

    def add_prefs(self, prefs):
        for choice in prefs:
            if choice in people and choice not in self.prefs:
                self.prefs.append(people[choice])
            else:
                print(choice + " not in people")


people = {}
for i, person in enumerate(bigs):
    people[person] = Person(person, i, "big")

for i, person in enumerate(littles):
    people[person] = Person(person, i, "little")

people["Paige Walker"].add_prefs(["Tulsi Shah", "Lauren Straub", "Seth Bakke", "Megan West"])
people["Isabella Andreoni"].add_prefs(["Kayla Morgan", "Tulsi Shah", "Natalia Hernandez"])
people["Nicole Villa"].add_prefs(["Natalia Hernandez", "Devan Hoston-Turner", "Sarah Nguyen", "Anna Mueller"])
people["Micah Jordan"].add_prefs(["Natalia Hernandez", "Devan Hoston-Turner", "Sarah Nguyen", "Anna Mueller"])
people["Blake Jackson"].add_prefs(["Seth Bakke", "Lauren Straub", "Molly Brown", "Tulsi Shah"])
people["Mikey Yang"].add_prefs(["Michelle Pak", "Lauren Straub", "Anna Mueller", "Molly Brown"])
people["Matthew Berdiago"].add_prefs(["Michelle Pak", "Lauren Straub", "Tulsi Shah", "Sophia Farland"])
people["Breelyn Betts"].add_prefs(["Tulsi Shah", "Lorraine Gardner", "Lauren Straub", "Matthew Soriano"])
people["Anna Zagorski"].add_prefs(["Marina Davis", "Michelle Pak", "Anna Mueller", "Sophia Farland"])
people["Kyle Wilson"].add_prefs(["Tulsi Shah", "Robert Asmar", "Megan West", "Michelle Pak", "Natalia Hernandez", "Kayla Morgan"])
people["Amanda Meegan"].add_prefs(["Lauren Straub", "Molly Brown", "Sarah Nguyen", "Sophia Farland"])
people["Matthew Low"].add_prefs(["Anna Mueller", "Alex Moore", "Matthew Soriano", "Seth Bakke"])
people["Emily Vees"].add_prefs(["Sarah Nguyen", "Seth Bakke", "Anna Mueller"])
people["Leigh Lewis"].add_prefs(["Robert Asmar", "Molly Brown", "Lauren Straub"])
people["Athena Giron"].add_prefs(["Tulsi Shah", "Molly Brown", "Sarah Nguyen", "Devan Hoston-Turner"])
people["Nolan Jacobs Walker"].add_prefs(["Alex Moore", "Matthew Soriano", "Anna Mueller", "Sophia Farland"])
people["Evan Velastegui"].add_prefs(["Lauren Straub", "Natalia Hernandez", "Matthew Soriano"])
people["Nadia Lowe"].add_prefs(["Kayla Morgan", "Robert Asmar", "Devan Hoston-Turner", "Natalia Hernandez"])

people["Sarah Nguyen"].add_prefs(["Emily Vees", "Athena Giron", "Nicole Villa", "Amanda Meegan"])
people["Seth Bakke"].add_prefs(["Blake Jackson", "Paige Walker", "Emily Vees", "Anna Zagorski"])
people["Molly Brown"].add_prefs(["Lily Do", "Leigh Lewis", "Blake Jackson"])
people["Lauren Straub"].add_prefs(["Matthew Berdiago", "Blake Jackson", "Breelyn Betts", "Amanda Meegan"])
people["Marina Davis"].add_prefs(["Anna Zagorski", "Nadia Lowe", "Paige Walker", "Breelyn Betts"])
people["Anna Mueller"].add_prefs(["Matthew Berdiago", "Paige Walker", "Anna Zagorski", "Kyle Wilson"])
people["Devan Hoston-Turner"].add_prefs(["Nadia Lowe", "Nicole Villa", "Mikey Yang", "Matthew Berdiago"])
people["Kayla Morgan"].add_prefs(["Isabella Andreoni", "Nadia Lowe", "Paige Walker", "Lily Do"])
people["Alex Moore"].add_prefs(["Lily Do", "Kyle Wilson", "Anna Zagorski", "Matthew Low"])
people["Sophia Farland"].add_prefs(["Matthew Berdiago", "Paige Walker", "Anna Zagorski", "Athena Giron"])
people["Tulsi Shah"].add_prefs(["Isabella Andreoni", "Nadia Lowe", "Breelyn Betts", "Paige Walker"])
people["Michelle Pak"].add_prefs(["Matthew Berdiago", "Mikey Yang", "Kyle Wilson", "Anna Zagorski"])
people["Megan West"].add_prefs(["Paige Walker", "Anna Zagorski", "Breelyn Betts", "Blake Jackson"])
people["Matthew Soriano"].add_prefs(["Breelyn Betts", "Matthew Berdiago", "Kyle Wilson", "Nolan Jacobs Walker"])
people["Robert Asmar"].add_prefs(["Leigh Lewis", "Nolan Jacobs Walker", "Matthew Low"])
people["Natalia Hernandez"].add_prefs(["Nicole Villa", "Isabella Andreoni", "Micah Jordan", "Blake Jackson"])
people["Madeline Connell"].add_prefs(["Blake Jackson", "Anna Zagorski", "Nadia Lowe", "Lily Do"])
people["Lorraine Gardner"].add_prefs(["Breelyn Betts", "Nadia Lowe", "Paige Walker", "Anna Zagorski"])


def create_fitness_matrix(bigs, littles, people):
    fitness_matrix = {}
    for big_name in bigs:
        for little_name in littles:
            big = people[big_name]
            little = people[little_name]
            score = 0
            if big in little.prefs:
                score += little.prefs.index(big)
            else:
                score += len(bigs)

            if little in big.prefs:
                score += big.prefs.index(little)
            else:
                score += len(littles)

            fitness_matrix[(big, little)] = score
            fitness_matrix[(little, big)] = score

    # for key, value in fitness_matrix.items():
    #     print(key, value)

    return fitness_matrix


fitness_matrix = create_fitness_matrix(bigs, littles, people)


def evaluate_pairing(list1, list2):
    final_score = 0
    for i, j in zip(list1, list2):
        if i and j:
            score = fitness_matrix[(people[i], people[j])]
            final_score += score
    return final_score





def crossover(list1, list2, last_set_index):
    new_pairing = [0]*len(list1)
    primary = random.choice((list1, list2))
    if primary == list1:
        secondary = list2.copy()
    else:
        secondary = list1.copy()

    new_pairing[last_set_index:] = primary[last_set_index:]
    paired = new_pairing[last_set_index:]
    start = random.randint(0, last_set_index-1)
    end = random.randint(start+1, last_set_index)
    print(start, end)

    print("\n\n", new_pairing, "\n\n")

    for i in range(start, end):
        if primary[i] not in paired:
            new_pairing[i] = primary[i]
            paired.append(primary[i])

    print("\n\n", new_pairing, "\n\n")

    for i in range(len(secondary)):
        if new_pairing[i] == 0 and secondary[i] not in paired:
            new_pairing[i] = secondary[i]
    print("\n\n", new_pairing, "\n\n")

    leftover = []
    for elem in secondary:
        if elem not in paired:
            leftover.append(elem)

    for i in range(len(new_pairing)):
        if new_pairing[i] == 0:
            new_pairing[i] = leftover.pop(0)

    return new_pairing


def breed(current_pop, generations, last_set_index):
    list1 = random.choice(current_pop).order
    list2 = random.choice(current_pop).order

    new_cross = crossover(list1, list2, last_set_index)
    score = evaluate_pairing(s)


def create_starting_pop(stationary_group, shuffle_group, people, last_set_index):
    population = 1000
    pop_list = []
    for i in range(population):
        current_shuffle_group = shuffle_group.copy()
        new_shuffle = []
        for i in range(last_set_index):
            choice = random.choice(current_shuffle_group)
            new_shuffle.append(choice)
            current_shuffle_group.remove(choice)

        print(len(stationary_group) - last_set_index)
        print(last_set_index)
        print(len(stationary_group))
        for i in range(len(stationary_group) - last_set_index):
            new_shuffle.append(None)


        for elem in current_shuffle_group:
            index = random.randint(last_set_index, len(new_shuffle)-1)
            new_shuffle[index] = elem

        score = evaluate_pairing(stationary_group, new_shuffle)
        matching = Matching(new_shuffle, score)
        pop_list.append(matching)

    heapq.heapify(pop_list)
    cull = heapq.nsmallest(50, pop_list)

    # print(cull)


def setup(bigs, littles, people):
    stat_group = []
    shuffle_group = []
    if len(bigs) > len(littles):
        multiplier = math.ceil(len(bigs)/len(littles))
        stationary_group = littles.copy() * multiplier
        shuffle_group = bigs.copy()
        last_set_index = len(stationary_group) - len(littles)

    else:
        multiplier = math.ceil(len(littles)/len(bigs))
        stationary_group = bigs.copy() * multiplier
        shuffle_group = littles.copy()
        last_set_index = len(stationary_group) - len(bigs)

    for big in bigs:
        for little in littles:
            if fitness_matrix[(people[big], people[little])] == 0:
                if len(bigs) > len(littles):
                    final_matchings[little] = [big]
                else:
                    final_matchings[big] = [little]
                print("AUTO MATCH: ", big, little)
                last_set_index -= 1
                if big in stationary_group:
                    stationary_group.remove(big)
                    shuffle_group.remove(little)
                elif little in stationary_group:
                    stationary_group.remove(little)
                    shuffle_group.remove(big)

    # print(last_set_index)
    print('stationary_group ' + str(stat_group))
    print('\n\nshuffle_group ' + str(shuffle_group))
    create_starting_pop(stationary_group, shuffle_group, people, last_set_index)


setup(bigs, littles, people)
print(final_matchings)
