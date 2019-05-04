var bigs = ["Paige Walker", "Isabella Andreoni", "Nicole Villa",
        "Micah Jordan", "Blake Jackson", "Mikey Yang", "Matthew Berdiago",
        "Breelyn Betts", "Anna Zagorski", "Lily Do", "Kyle Wilson",
        "Amanda Meegan", "Matthew Low", "Emily Vees", "Leigh Lewis",
        "Athena Giron", "Nolan Jacobs Walker", "Evan Velastegui", "Nadia Lowe"];

var littles = ["Sarah Nguyen", "Seth Bakke", "Molly Brown", "Lauren Straub",
           "Marina Davis", "Anna Mueller", "Devan Hoston-Turner",
           "Kayla Morgan", "Alex Moore", "Sophia Farland", "Tulsi Shah",
           "Michelle Pak", "Megan West", "Matthew Soriano",
           "Robert Asmar", "Natalia Hernandez", "Madeline Connell",
           "Lorraine Gardner"]

stationary_group = [];

final_matchings = [];

people = {};


class Matching {
  constructor(order, score) {
    this.order = order;
    this.score = score;
  }
}


class Match {
  constructor(pair, score) {
    this.pair = pair;
    this.big = pair[0];
    this.little = pair[1];
    this.score = score;
  }
}

class Person {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.prefs = [];
  }

  add_prefs(prefs) {
    for(i=0; i<prefs.length; i++) {
      var choice = prefs[i];
      if((choice in people) && !(choice in prefs)) {
        this.prefs.push(people[choice]);
      } else {
        console.log(choice + " not in people");
      }
    }
  }
}


for(i=0; i<bigs.length; i++) {
    people[bigs[i]] = new Person(bigs[i], "big");
}

for(i=0; i<littles.length; i++) {
    people[littles[i]] = new Person(littles[i], "little");
}


people["Paige Walker"].add_prefs(["Tulsi Shah", "Lauren Straub", "Seth Bakke", "Megan West"]);
people["Isabella Andreoni"].add_prefs(["Kayla Morgan", "Tulsi Shah", "Natalia Hernandez"]);
people["Nicole Villa"].add_prefs(["Natalia Hernandez", "Devan Hoston-Turner", "Sarah Nguyen", "Anna Mueller"]);
people["Micah Jordan"].add_prefs(["Natalia Hernandez", "Devan Hoston-Turner", "Sarah Nguyen", "Anna Mueller"]);
people["Blake Jackson"].add_prefs(["Seth Bakke", "Lauren Straub", "Molly Brown", "Tulsi Shah"]);
people["Mikey Yang"].add_prefs(["Michelle Pak", "Lauren Straub", "Anna Mueller", "Molly Brown"]);
people["Matthew Berdiago"].add_prefs(["Michelle Pak", "Lauren Straub", "Tulsi Shah", "Sophia Farland"]);
people["Breelyn Betts"].add_prefs(["Tulsi Shah", "Lorraine Gardner", "Lauren Straub", "Matthew Soriano"]);
people["Anna Zagorski"].add_prefs(["Marina Davis", "Michelle Pak", "Anna Mueller", "Sophia Farland"]);
people["Kyle Wilson"].add_prefs(["Tulsi Shah", "Robert Asmar", "Megan West", "Michelle Pak", "Natalia Hernandez", "Kayla Morgan"]);
people["Amanda Meegan"].add_prefs(["Lauren Straub", "Molly Brown", "Sarah Nguyen", "Sophia Farland"]);
people["Matthew Low"].add_prefs(["Anna Mueller", "Alex Moore", "Matthew Soriano", "Seth Bakke"]);
people["Emily Vees"].add_prefs(["Sarah Nguyen", "Seth Bakke", "Anna Mueller"]);
people["Leigh Lewis"].add_prefs(["Robert Asmar", "Molly Brown", "Lauren Straub"]);
people["Athena Giron"].add_prefs(["Tulsi Shah", "Molly Brown", "Sarah Nguyen", "Devan Hoston-Turner"]);
people["Nolan Jacobs Walker"].add_prefs(["Alex Moore", "Matthew Soriano", "Anna Mueller", "Sophia Farland"]);
people["Evan Velastegui"].add_prefs(["Lauren Straub", "Natalia Hernandez", "Matthew Soriano"]);
people["Nadia Lowe"].add_prefs(["Kayla Morgan", "Robert Asmar", "Devan Hoston-Turner", "Natalia Hernandez"]);

people["Sarah Nguyen"].add_prefs(["Emily Vees", "Athena Giron", "Nicole Villa", "Amanda Meegan"]);
people["Seth Bakke"].add_prefs(["Blake Jackson", "Paige Walker", "Emily Vees", "Anna Zagorski"]);
people["Molly Brown"].add_prefs(["Lily Do", "Leigh Lewis", "Blake Jackson"]);
people["Lauren Straub"].add_prefs(["Matthew Berdiago", "Blake Jackson", "Breelyn Betts", "Amanda Meegan"]);
people["Marina Davis"].add_prefs(["Anna Zagorski", "Nadia Lowe", "Paige Walker", "Breelyn Betts"]);
people["Anna Mueller"].add_prefs(["Matthew Berdiago", "Paige Walker", "Anna Zagorski", "Kyle Wilson"]);
people["Devan Hoston-Turner"].add_prefs(["Nadia Lowe", "Nicole Villa", "Mikey Yang", "Matthew Berdiago"]);
people["Kayla Morgan"].add_prefs(["Isabella Andreoni", "Nadia Lowe", "Paige Walker", "Lily Do"]);
people["Alex Moore"].add_prefs(["Lily Do", "Kyle Wilson", "Anna Zagorski", "Matthew Low"]);
people["Sophia Farland"].add_prefs(["Matthew Berdiago", "Paige Walker", "Anna Zagorski", "Athena Giron"]);
people["Tulsi Shah"].add_prefs(["Isabella Andreoni", "Nadia Lowe", "Breelyn Betts", "Paige Walker"]);
people["Michelle Pak"].add_prefs(["Matthew Berdiago", "Mikey Yang", "Kyle Wilson", "Anna Zagorski"]);
people["Megan West"].add_prefs(["Paige Walker", "Anna Zagorski", "Breelyn Betts", "Blake Jackson"]);
people["Matthew Soriano"].add_prefs(["Breelyn Betts", "Matthew Berdiago", "Kyle Wilson", "Nolan Jacobs Walker"]);
people["Robert Asmar"].add_prefs(["Leigh Lewis", "Nolan Jacobs Walker", "Matthew Low"]);
people["Natalia Hernandez"].add_prefs(["Nicole Villa", "Isabella Andreoni", "Micah Jordan", "Blake Jackson"]);
people["Madeline Connell"].add_prefs(["Blake Jackson", "Anna Zagorski", "Nadia Lowe", "Lily Do"]);
people["Lorraine Gardner"].add_prefs(["Breelyn Betts", "Nadia Lowe", "Paige Walker", "Anna Zagorski"]);

function repeat(arr, n){
  var a = [];
  for (var i=0;i<n;[i++].push.apply(a,arr));
  return a;
}

function create_fitness_matrix(bigs, littles) {
  var fitness_matrix = {};
  for(i=0; i<bigs.length; i++){
    var big_name = bigs[i];
    for(j=0; j<littles.length; j++){
      var little_name = littles[j];

      var big = people[big_name];
      var little = people[little_name];

      var big_score = littles.length;
      var little_score = bigs.length;

      var counter = 0;
      little.prefs.forEach(function(element) {
        if(element.name === big_name){
          little_score = counter;
        }
        counter++;
      });

      counter = 0;
      big.prefs.forEach(function(element) {
        if(element.name === little_name){
          big_score = counter;
        }
        counter++;
      });
      var score = big_score + little_score;

      fitness_matrix[[big.name, little.name]] = score;
      fitness_matrix[[little.name, big.name]] = score;
    }

  }
  return fitness_matrix;
}

var fitness_matrix = create_fitness_matrix(bigs, littles);


function evaluate_pairing(list1, list2) {
  var final_score = 0;
  for(i=0; i<list1.length; i++) {
    var name1 = list1[i];
    var name2 = list2[i];
    if (name1 !== null && name2 !== null) {
      final_score += fitness_matrix[[name1, name2]];
    }
  }
  return final_score
}

function mutate(list, last_set_index){
  valid = [];
  for(i=last_set_index; i<list.length; i++) {
    if(list[i] !== null) {
      valid.push(i);
    }
  }
  random_second = valid[Math.floor(Math.random()*valid.length)];
  random_first = Math.floor(Math.random() * last_set_index);
  a1 = list[random_first];
  a2 = list[random_second];
  list[random_first] = a2;
  list[random_second] = a1;
  return list;
}




function crossover(list1, list2, last_set_index) {
  new_pairing = repeat([0], list1.length);
  choose = Math.round(Math.random());
  if (choose === 0) {
    primary = [...list1];
    secondary = [...list2];
  } else {
    primary = [...list2];
    secondary = [...list1];
  }
  for (j=last_set_index; j<new_pairing.length; j++) {
    new_pairing[j] = primary[j];
  }
  paired = new_pairing.slice(last_set_index);
  start = Math.floor(Math.random()*(last_set_index-1));
  end = Math.floor(Math.random()*(last_set_index - start + 1) + start + 1);

  for(i=start; i<end; i++) {
    if (!paired.includes(primary[i])) {
      new_pairing[i] = primary[i]
      paired.push(primary[i])
    }
  }
  for(i=0; i<last_set_index; i++) {
    if (new_pairing[i] == 0 && !paired.includes(secondary[i])) {
      new_pairing[i] = secondary[i];
      paired.push(secondary[i]);
    }

  }
  leftover = [];
  for(j=0; j<secondary.length; j++) {
    if (!paired.includes(secondary[j])) {
      leftover.push(secondary[j]);
    }
  }
  for (i=0; i<new_pairing.length; i++) {
    if (new_pairing[i] == 0) {
      new_pairing[i] = leftover.pop(0);
    }
  }
  mutation_chance = .1
  rand = Math.random()
  if(rand < mutation_chance) {
    new_pairing = mutate(new_pairing, last_set_index);
  }
  return new_pairing
}

function breed(start_pop, generation, last_set_index, stat_group){
  var heap = new Heap(function(a, b) {
    return b.score - a.score;
  });
  var min = 500;
  var min_val = null;
  current_pop = [...start_pop];
  for(i=0; i<current_pop.length; i++) {
    if (current_pop[i].score < min) {
      min = current_pop[i].score;
      min_val = current_pop[i].order;
    }
  }
  for (gen=0; gen<generation; gen++) {
    for (i=0; i<10; i++) {
      current_pop.forEach(function(elem) {
        other = Math.floor(Math.random()*current_pop.length);
        other_elem = current_pop[other];
        new_cross = crossover(elem.order, other_elem.order, last_set_index);
        score = evaluate_pairing(new_cross, stat_group);
        matching = new Matching(new_cross, score);
        if (heap.size() < current_pop.length) {
          heap.push(matching);
        } else if (heap.peek() > score) {
          heap.pushpop(matching);
        }
      });
    }
    current_pop = heap.toArray();
    for(i=0; i<current_pop.length; i++) {
      if (current_pop[i].score < min) {
        min = current_pop[i].score;
        min_val = current_pop[i].order;
      }
    }

    heap = new Heap(function(a, b) {
      return b.score - a.score;
    });
  }
  console.log(min);
  console.log(min_val);
  for (i=0; i<min_val.length; i++) {
    if(min_val[i] !== null) {
      if (final_matchings[stat_group[i]] === undefined) {
        final_matchings[stat_group[i]] = [min_val[i]];
      } else {
        final_matchings[stat_group[i]].push(min_val[i]);
      }
    }
  }
}



function create_starting_pop(stat_group, shuffle_group, last_set_index) {
  var population = 2000;
  pop_list = [];

  var heap = new Heap(function(a, b) {
    return b.score - a.score;
  });

  for (pop=0; pop<population; pop++) {
    current_shuffle_group = [...shuffle_group];
    new_shuffle = [];

    for (j=0; j<last_set_index; j++) {
      select = Math.floor(Math.random()*(current_shuffle_group.length));
      choice = current_shuffle_group[select];
      current_shuffle_group.splice(select, 1);
      new_shuffle.push(choice);
    }

    for (j=0; j<stat_group.length-last_set_index; j++) {
      new_shuffle.push(null);
    }

    for (j=0; j<current_shuffle_group.length; j++) {
      index = Math.floor(Math.random()*(new_shuffle.length-last_set_index))+last_set_index
      new_shuffle[index] = current_shuffle_group[j];
    }
    var score = evaluate_pairing(stat_group, new_shuffle);
    var matching = new Matching(new_shuffle, score);
    if (heap.size() < population/10) {
      heap.push(matching);
    } else if (heap.peek() > score) {
      heap.pushpop(matching);
    }
  }
  cull = heap.toArray();
  breed(cull, 10, last_set_index, stat_group);
  table(final_matchings);
}








function setup(bigs, littles) {
  var stat_group = [];
  var shuffle_group = [];
  if (bigs.length > littles.length) {
    var multiplier = Math.ceil(bigs.length/littles.length);
    var stat_group = repeat(littles.slice(0), multiplier);
    var shuffle_group = bigs.slice(0);
    var last_set_index = stat_group.length - littles.length;
  } else {
    var multiplier = Math.ceil(littles.length/bigs.length);
    var stat_group = repeat(bigs.slice(0), multiplier);
    var shuffle_group = littles.slice(0);
    var last_set_index = stat_group.length - bigs.length;
  }

  for(i=0; i<bigs.length; i++){
    var big = people[bigs[i]];
    for(j=0; j<littles.length; j++){
      var little = people[littles[j]];
      if (fitness_matrix[[big.name, little.name]] == 0) {
        if (bigs.length < littles.length) {
          arr = [big.name];
          final_matchings[little.name] = arr;
        } else {
          arr = [little.name];
          final_matchings[big.name] = [little.name];
        }
        last_set_index--;
        if (big.name in stationary_group) {
          var index = stat_group.indexOf(big.name);
          stat_group.splice(index, 1);
          index = shuffle_group.indexOf(little.name);
          shuffle_group.splice(index, 1);
        } else {
          var index = stat_group.indexOf(little.name);
          stat_group.splice(index, 1);
          index = shuffle_group.indexOf(big.name);
          shuffle_group.splice(index, 1);
        }
      }
    }

  }

  create_starting_pop(stat_group, shuffle_group, last_set_index);
}

setup(bigs, littles);
function table (final_matchings) {
  console.log(final_matchings);
    window.onload = function () {
      for(var key in final_matchings) {
        console.log("else");
        var bignode = document.createElement("tr");
        bignode.id = key;
        var lilnode1 = document.createElement("td");
        var lilnode2 = document.createElement("td");
        console.log(key);
        console.log(final_matchings[key]);
        var textnode1 = document.createTextNode(key);
        var textnode2 = document.createTextNode(final_matchings[key]);
        lilnode1.appendChild(textnode1);
        lilnode2.appendChild(textnode2);
        bignode.appendChild(lilnode1);
        bignode.appendChild(lilnode2);
        table = document.getElementById("table1");
        table.appendChild(bignode);
        console.log(table);
    };
  }
}
