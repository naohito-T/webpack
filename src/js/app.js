// import と export 利用に関してes modulesという仕様の書き方を利用している
import $ from "jquery"; // JQueryを $で使えるように指定してる
import velocity from "velocity-animate"; // 拡張子がなくてもwebpackが探してくれる
import { add } from "./modeules/math";

console.log("app");

const result = add(1, 2);

$("body").append(result);
velocity($("h1"), "fadeIn", { duration: 2000, loop: true });
