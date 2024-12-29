<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# ejecutar en desarrollo
1. Clonar el repositorio
2. Ejecutar
```
npm install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
5. Reconstruir BD con la semilla (SEED) Solamente en desarrollo y si no hay pokemons en la BD
```
http://localhost:3000/api/v2/pokemon/567
```


## Stack usado
* MongoDB
* Nest