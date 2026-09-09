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
抽出し、新たなGame[]を作成しているというイメージ。*/

/*mapオブジェクト、keyを指定しvalueを値として利用*/
const gameGenres = new Map<Game>();
Map.
public set value(v : string) {
    this. = v;
}


