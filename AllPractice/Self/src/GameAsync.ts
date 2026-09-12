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


//非同期処理、2秒待ってGame配列を取得する
/*
const getGames = new Promise<Game[]>((resolve,reject) => {
    setTimeout(() => {
        resolve(console.log());
    }, 2000);
})
*/

/*Promiseはクラス=>newで新しいインスタンスを宣言
Promise=>現状結果がなくても、後で返ってくるという約束の役割のオブジェクト
async=>この関数は非同期処理を扱い、Promiseを必ず返しますという宣言
await=>Promiseの処理が終わるまで待ちますという宣言
(awaitはasync内でのみ扱える)
*/

function gameList (games:Game[]):Promise<Game[]> {
    return new Promise <Game[]>((resolve, reject) =>{
        console.log("ゲームリストを取得します（2秒）");
        setTimeout(() =>{
            resolve (games);
        }, 2000); 
    })
}

async function getLists (game:Game[]){
    const data = await gameList(game);
    console.log(data);
}
    
getLists(games);
