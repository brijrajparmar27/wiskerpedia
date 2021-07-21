// cats API communications from here
class cats
{
    constructor()
    {
        this.APIkey = '69350548-e9ec-4fa9-a033-f204925f5c42';
        this.breedsBase = 'https://api.thecatapi.com/v1/breeds';
    }
    async getCatBreeds()
    {
        const breedsRAW = await fetch(`${this.breedsBase}?${this.APIkey}`);
        const breeds = await breedsRAW.json();
        this.catinfo = breeds;
        return breeds;
    }
}

