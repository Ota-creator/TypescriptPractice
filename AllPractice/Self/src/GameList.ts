export {};//別ファイルとの変数競合を避けるため、ダミー用。公開時は利用不可

//Gamelistを型定義して作成する。Type型を利用
type Game = {
    id: number;
    name: string;
    genre: string;
};

//GameList
const games: Game[] =[
    {id: 1, name: "Escape From Tarkov", genre: "FPS"},
    {id: 2, name: "League Of Legend", genre: "MOBA"},
    {id: 3, name: "Minecraft", genre: "Sandbox"}
]

//GameListから内容を取得、必要な情報を表示
function showGamenames(games:Game[]){
    for ( const game of games){
        console.log(game.name);
    }
}

showGamenames(games);

//GameListから特定の条件のみを検索
const gameGenre =games.filter( g => g.genre == "FPS");
//console.log(gameGenre);

/*filterは、配列の各要素を判定し、"true"の条件のみを取り出して
～新しい配列を作成する～メソッド。今回、Game[]からgenre-FPSの条件を
抽出し、新たなGame[]を作成しているというイメージ。
filterは元の配列から条件に合う要素を含む新しい配列を返している*/

/*filterとmapを併用し、filterで作成した配列の中身をmapで再編成*/
const gameGenres = gameGenre.map(game => game.genre);
console.log(gameGenres);

/*games配列から特定の条件（今回genre）を指定して
検索する関数。filterにおいて、再作成された配列を
新たに入れる型を宣言してあげないと要素を
取り出しただけで利用できないので、gameSerch型として定義
関数として、最後にreturnで新しくなった配列を返す
gameSerchsで検索用関数を用いて帰ってきた値を表示*/
function searchGamesByGenre (game:Game[], genre:string):Game[]{
    const gameSearch:Game[] = game.filter( game => game.genre == genre)
    return gameSearch;
}

const searchedGame = searchGamesByGenre(games,"Sandbox");
console.log(searchedGame);
