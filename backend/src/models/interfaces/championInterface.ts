interface IDataChampion {
    id: string,
    key: string,
    name: string,
    title: string,
    lore: string,
    image: IChampionImage
}

interface IChampionImage {
    full: String
}

interface IChampionDTO {
    type: string,
    format: string,
    version: string,
    data: IDataChampion[]
}

interface IChampionKey {
    championKey: number
}

interface IChampionMastery {
    championId: number,
    championData: object,
    championLevel: number,
    championPoints: DoubleRange,
    lastPlayTime: TimeRanges,
}