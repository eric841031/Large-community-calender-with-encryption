預覽圖
## Sever端API
可以用POST或是GET的方式呼叫sever上的php程式。  
下表打勾的部份，代表需要的參數，例如要刪除資料就要傳送：

	cmd=del&key=MyTestKey&did=AAAAB&uid=AC

### 參數

|cmd|key<br>(驗證碼)|did<br>(data ID)|date<br>(日期/起始日期)|dateE<br>(結束日期)|uid<br>(使用者ID)|gid<br>(群組ID)|val<br>(輸入訊息)|
|:-----:|:-----:|:-----:|:-------:|:-----:|:-----:|:------:|:-----:|
|  add  |   v   |       |   v     |       |   v   |   v    |   v   |
|  edit |   v   |  >0   | optional|       |   v   |optional|   v   |
|  del  |   v   |  >0   |         |       |   v   |        |       |
|  read |   v   |       |   v     |   v   |   v   |        |       |

### 回傳值

|cmd|成功|失敗|
|:-----:|:-----:|:-----:|
|  add  |   >0，代表did   |   0    |
|  edit |   1   |  0   |
|  del  |   1   |  0   |
|  read |   所有在日期區間，而且是目前使用者具有讀取權限的資料   |  0     |

## 資料結構

|Name.php|Name_st.txt|Name.txt|
|:-----|:-----|:-----|
|gidArr=\[0,\[1,2\],\[1,-1,5\]...\]; //0代表所有人，負號代表包含其他群組成員<br>uid從1開始<br>uid=0是guest帳號|count(Base64\[5\])<br>pos(Base64\[4\])<br>pos_time、pos_uid<br>\/\/詳見後面說明|第1筆資料<br>第2筆資料<br>(gid is Base64\[2\])|

### 每筆資料

| 項目 | 資料ID | 日期 | 擁有者ID | 群組ID | 資料 |
|:-----|:-----|:-----|:-----|:-----|:-----|
| 資料型態 | Base64\[5\]<br>(30位元數字) | Base64\[4\]<br>(24位元數字) | Base64\[2\]<br>(3位元狀態+9位元數字) | Base64\[2\]<br>(3位元狀態+9位元數字) | Base64\[4\]+Datas<br>(1位元狀態+23位元數字) |
| 說明 |  | y=k/31/12<br>m=k/31%12<br>d=k%31 | 狀態:rwx<br>(for others) | 狀態:rwx<br>(for group members) | cdxxxx…xxx<br>c:是否加密<br>d:是否使用密碼<br>xxxx…xxx:使用第幾把金鑰 |

r:讀取  
w:更動(編輯)資料  
x:刪除資料

#### 擁有者
1. 因為擁有者總是具有rwx,故其rwx代表others的rwx
2. 可以進行所有操作

#### 群組成員
1. 群組可以設定不同的顏色,在日曆上顯示出小方塊
2. 群組0是無群組或所有人
3. 具有x屬性可以變更others的使用權限，但無法更動擁有者與群組。

guest帳號：uid=0
