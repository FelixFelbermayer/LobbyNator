Chatmessage.delete_all
Lobby.delete_all
Filter.delete_all
Filtercategory.delete_all
User.delete_all

cat = Filtercategory.create(name: "Game", singular: true)
strikt = cat.filters.create(name: "Counter Strike")
lol = cat.filters.create(name: "League of Legends")
au = cat.filters.create(name: "Among Us")
nfs = cat.filters.create(name: "Need for Speed")

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

feci.filters.push(Filter.find(strikt.id))
stef.filters.push(lol)

l = Lobby.create(name: "Lobby 1", description: "Feci carrien", user: feci, date: Time.now, maxplayers: 4)
l2 = Lobby.create(name: "Lobby 2", description: "Feci carrien sonntags", user: feci, date: Time.now, maxplayers: 5)
l3 = Lobby.create(name: "Lobby 3", description: "Feci carrien samstags", user: feci, date: Time.now, maxplayers: 8)

l.filters.push(strikt)
l2.filters.push(lol)

l3.filters.push(lol)
l3.filters.push(strikt)

l.users.push(feci)
l.users.push(stef)
l2.users.push(feci)
l2.users.push(stef)
l3.users.push(feci)

l.save
l2.save
l3.save


strikt.filter_image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'CSGO.jpg')), filename: 'CSGO.jpg')
lol.filter_image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'lol.jpg')), filename: 'lol.jpg')
au.filter_image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'among.jpg')), filename: 'among.jpg')
nfs.filter_image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'nfs.jpg')), filename: 'nfs.jpg')
strikt.save
lol.save
au.save
nfs.save