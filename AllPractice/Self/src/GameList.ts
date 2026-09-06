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