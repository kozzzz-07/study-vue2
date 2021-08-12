import axios from "axios";

// 別の設定を使用する際は、カスタムインスタンス
const instance = axios.create({
  baseURL: "http://hogehoge",
});

export default instance;
