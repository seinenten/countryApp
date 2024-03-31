import { Country } from './country';
import { Region } from './region.type';

export interface CacheStore {
    byCapital: TermCountries;
    byRegion: RegionCountries;
    byPais: TermCountries;
}

export interface TermCountries {
    term: string;
    countries: Country[];
}

export interface RegionCountries{
    region: Region;
    countries: Country[];
}