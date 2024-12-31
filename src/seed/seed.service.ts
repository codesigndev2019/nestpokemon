import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapter/axios.adapter';

@Injectable()
export class SeedService {


  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly _axiosAdapter: AxiosAdapter
  ) { }

  async excecuteSeed() {
    await this.pokemonModel.deleteMany();
    const pokeArr = await this._axiosAdapter.get<PokeResponse>(`${process.env.POKE_API_URI}?limit=650`);
    // Ejemplo con promise.all
    // const seedPokemon = [];
    // pokeArr.results.forEach(({ name, url }) => {
    //   const segments = url.split('/');
    //   const noPokemon: number = +segments[segments.length - 2];
    //   const pokeObj = {
    //     no: noPokemon,
    //     name,
    //     url
    //   }
    //   seedPokemon.push(this.pokemonModel.create(pokeObj))
    // })
    // const response = await Promise.all(seedPokemon);

    // Ejemplo con insertAny
    const pokemonInsert: { no:number, name:string, url:string }[] = [];
    pokeArr.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const noPokemon: number = +segments[segments.length - 2];
      const pokeObj = {
        no: noPokemon,
        name,
        url
      }
      pokemonInsert.push(pokeObj)
    })
    const response = await this.pokemonModel.insertMany(pokemonInsert);
    return response
  }
}
