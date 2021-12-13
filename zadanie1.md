# Zadanie 3
a)
docker build . -t student/node-web-app

b)
docker run --rm -ti -p 49160:8080  student/node-web-app

c)
w tak uruchomionym kontonerze informacje generowane przez serwer pojawia sie w konsoli

d)
Zeby dowiedziec sie ile warst posiada zbudowany obraz nalezy uzyc polecenia 
docker history -q student/node-web-app:latest | wc -l
# Zadanie 4
W celu zbudowania obrazu wykorzystujac bezposredni link do Dockefile nalezy np. uzyc komendu
docker build https://github.com/<UserName>/<RepositoryName>.git#main:<CommitName>

Aby przeniesc obraz na DockerHub mozna uzyc komendy:
docker tag <existing-image> <hub-user>/<repo-name>[:<tag>]

nastepnie
docker commit <existing-container> <hub-user>/<repo-name>[:<tag>]

nastepnie
docker push <hub-user>/<repo-name>:<tag>
