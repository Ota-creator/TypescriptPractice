"use strict";
//GameList
const games = [
    { id: 1, name: "Escape From Tarkov", genre: "FPS" },
    { id: 2, name: "League Of Legend", genre: "MOBA" },
    { id: 3, name: "Minecraft", genre: "Sandbox" }
];
//GameListから内容を取得、必要な情報を表示
function showGamenames(games) {
    for (const game of games) {
        console.log(game.name);
    }
}
showGamenames(games);
//GameListから特定の条件のみを検索
const gameGenre = games.filter(g => g.genre == "FPS");
//console.log(gameGenre);
/*filterは、配列の各要素を判定し、"true"の条件のみを取り出して
～新しい配列を作成する～メソッド。今回、Game[]からgenre-FPSの条件を
抽出し、新たなGame[]を作成しているというイメージ。*/
/*filterとmapを併用し、filterで作成した配列の中身をmapで再編成*/
const gameGenres = gameGenre.map(game => game.genre);
console.log(gameGenres);
/*games配列から特定の条件（今回genre）を指定して
検索する関数*/
function serchGamesByGenre(game, genre) {
    const gameSerch = game.filter(game => game.genre == genre);
    return gameSerch;
}
const gameSerchs = serchGamesByGenre(games, "FPS");
console.log(gameSerchs);
