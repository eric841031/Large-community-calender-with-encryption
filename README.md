## 概觀

* 提供個人或是群組成員使用的行事曆。
* 提供加密功能，密鑰由使用者保管。(客戶端網頁只放在個人電腦)

## 使用方法

1. 開啟setting.html
2. 依序填入需要的資料
3. 按最上方的OK產生檔案連結
4. 下載產生的檔案並放到適當位置
5. 打開config.js，修改me的數值給予不同的使用者(未來才會對不同使用者驗證)

注意：setting.html最下方「樣板」的欄位不需要填寫，這是用來產生template.js，是打包src中的html及php檔案供setting.html使用的。

## 佈署

### 客戶端

index.html (setting.html產生)  
config.js (setting.html產生)  
javascript (複製整個資料夾)  
css (複製整個資料夾)  
images (複製整個資料夾)  

### 伺服器端

由setting.html在「伺服器端」產生的3個檔案

