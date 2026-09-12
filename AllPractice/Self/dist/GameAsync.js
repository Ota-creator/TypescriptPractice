"use strict";
//GameList
const games = [
    { id: 1, name: "Escape From Tarkov", genre: "FPS" },
    { id: 2, name: "League Of Legend", genre: "MOBA" },
    { id: 3, name: "Minecraft", genre: "Sandbox" }
];
//非同期処理、2秒待ってGame配列を取得する
/*Promiseは

/*
const getGames = new Promise<Game[]>((resolve,reject) => {
    setTimeout(() => {
        resolve(console.log());
    }, 2000);
})
*/
function gameList(games) {
    return new Promise((resolve, reject) => {
        console.log("ゲームリストを取得します（2秒）");
        setTimeout(() => {
            resolve(games);
        }, 2000);
    });
}
async function getLists(game) {
    const data = await gameList(games);
    console.log(data);
}
getLists(games);
