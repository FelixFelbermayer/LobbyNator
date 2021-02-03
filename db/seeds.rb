cat = Filtercategory.create(name: "Game")

strikt = cat.filters.create(name: "Counter Strike")
lol = cat.filters.create(name: "League of Legends")
cat.filters.create(name: "Among Us")
cat.filters.create(name: "Need for Speed")

cat2 = Filtercategory.create(name: "Voicechat")

cat2.filters.create(name: "Discord")
cat2.filters.create(name: "MS Teams")
cat2.filters.create(name: "Teamspeak")

cat3 = Filtercategory.create(name: "Language")
cat3.filters.create(name: "German")
cat3.filters.create(name: "English")

cat4 = Filtercategory.create(name: "Skilllevel")
cat4.filters.create(name: "Beginner")
cat4.filters.create(name: "Intermediate")
cat4.filters.create(name: "Expert")
cat4.filters.create(name: "E-Sports Champion")

feci = User.create(username: "Feci", email: "feci@lobby.com", password: "test123")
stef = User.create(username: "Stef", email: "stef@lobby.com", password: "test123")

feci.filters.push(strikt)
stef.filters.push(lol)

l = Lobby.create(name: "Lobby 1", description: "Feci carrien", user: feci, date: Time.now)
l2 = Lobby.create(name: "Lobby 2", description: "Feci carrien sonntags", user: feci, date: Time.now)
l3 = Lobby.create(name: "Lobby 3", description: "Feci carrien samstags", user: feci, date: Time.now)

l.filters.push(strikt)
l2.filters.push(lol)

l3.filters.push(lol)
l3.filters.push(strikt)

l.users.push(feci)
l.users.push(stef)
l2.users.push(feci)
l2.users.push(stef)
l3.users.push(feci)

l.save()
l2.save()
l3.save()