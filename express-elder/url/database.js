module.exports = {
  zhusuget: function(x, y) {
    let url = `SELECT * from Zhushu where 1=1 LIMIT ${x}, ${y}`;
    return url;
  },
  zhusuget_sslou: function() {
    let url = `SELECT * from sslou`;
    return url;
  },
  zhusuput: function() {
    let url = `UPDATE Zhushu SET chuangwei=?,fjno=?,idcardno=?,name=?,rzdate=?,sslou=? WHERE id = ?`;
    return url;
  },
  zhusugetname: function(name, x, y) {
    let url = `SELECT * from Zhushu where name='${name}' LIMIT ${x}, ${y}`;
    return url;
  },
  zhusudelete: function(id) {
    let url = `DELETE from Zhushu where id=${id}`;
    return url;
  },
  chuangweiget: function() {
    let url = `select e.id as eid,e.idcardno,e.name,e.birtyday ,e.sex,e.mobile,e.photo,zs.fjno,zs.sslou,zs.chuangwei,zs.rzdate from elder e left join zhushu zs on e.idcardno=zs.idcardno`;
    return url;
  },
  chuangweigetname: function() {
    let url = ``;
    return url;
  },
  chuangweipost: function(info) {
    let {
      name = "",
      sslou = "",
      rzdate = "",
      idcardno = "",
      fjno = "",
      chuangwei = "",
    } = info;

    rzdate = this.switchTimeFormat(rzdate);
    let url = `INSERT INTO zhushu (name, sslou, rzdate, idcardno, fjno, chuangwei) VALUES (${name}, ${sslou}, ${rzdate}, ${idcardno}, ${fjno}, ${chuangwei})`;
    return url;
  },
  switchTimeFormat: function(time) {
    const dateTime = new Date(time);
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1;
    const date = dateTime.getDate();
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();
    const second = dateTime.getSeconds();
    let addZero = function(v) {
      return v < 10 ? "0" + v : v;
    };
    return `${year}-${addZero(month)}-${addZero(date)} ${addZero(
      hour
    )}:${addZero(minute)}:${addZero(second)}`;
  },
  chuangweigetname: function(name) {
    let url = `select e.id as eid,e.idcardno,e.name,e.birtyday ,e.sex,e.mobile,e.photo,zs.fjno,zs.sslou,zs.chuangwei,zs.rzdate from elder e left join zhushu zs on e.idcardno=zs.idcardno where e.name='${name}'`;
    return url;
  },
  jiashuget: function(x, y) {
    let url = `select j.*, e.name as ename, e.idcardno as eidcardno from jiashu j left join elder e on e.id=j.elderid where 1=1 LIMIT ${x},${y}`;
    return url;
  },
  jiashugetelder: function() {
    let url = `SELECT * FROM elder`;
    return url;
  },
  jiashugetname: function(name, x, y) {
    let url = `select j.*, e.name as ename, e.idcardno as eidcardno from jiashu j left join elder e on e.id=j.elderid where 1=1 and j.name like '%${name}%' LIMIT ${x},${y}`;
    return url;
  },
  jiashuput: function(info) {
    let { des, elderid, sex, name, mobile, guanxi, gzdanwei, id } = info;
    let url = `UPDATE jiashu SET des ='${des}', elderid ='${elderid}', sex ='${sex}', name ='${name}', mobile ='${mobile}', guanxi ='${guanxi}', gzdanwei ='${gzdanwei}' WHERE (id =${id})`;
    return url;
  },
  jiashupost: function(info) {
    let {
      des = "",
      elderid = "",
      sex = "",
      name = "",
      mobile = "",
      guanxi = "",
      gzdanwei = "",
    } = info;
    let url = `INSERT INTO jiashu (elderid, sex, name, mobile, guanxi, gzdanwei, des) VALUES (${elderid}, '${sex}', '${name}', '${mobile}', '${guanxi}', '${gzdanwei}', '${des}')`;
    return url;
  },
  jiashudelete: function(id) {
    let url = `delete from jiashu where id in(${id})`;
    return url;
  },
  qingjiaget: function(x, y) {
    let url = `SELECT * from Leaves where 1=1 LIMIT ${x}, ${y}`;
    return url;
  },
  qingjiaput: function(info) {
    let {
      xtype = "",
      begdate = "",
      applytime = "",
      shenpitime = "",
      applydes = "",
      enddate = "",
      accountname = "",
      tianshu = "",
      zgname = "",
      shenpiren = "",
      reply = "",
      status = "",
      id = "",
    } = info;
    begdate = this.switchTimeFormat(begdate);
    applytime = this.switchTimeFormat(applytime);
    shenpitime = this.switchTimeFormat(shenpitime);
    enddate = this.switchTimeFormat(enddate);
    let url = `UPDATE leaves SET xtype ='${xtype}', begdate ='${begdate}', applytime ='${applytime}', shenpitime ='${shenpitime}', applydes ='${applydes}', enddate ='${enddate}', accountname ='${accountname}', tianshu ='${tianshu}', zgname ='${zgname}', shenpiren ='${shenpiren}', reply ='${reply}', status =${status} WHERE (id =${id})`;
    return url;
  },
  qingjiadelete: function(id) {
    let url = `delete from leaves where id in(${id})`;
    return url;
  },
  qingjiagetname: function(name, x, y) {
    let url = `SELECT * from Leaves where 1=1 and zgname like '%${name}%' LIMIT ${x}, ${y}`;
    return url;
  },
  yuangongget: function(x, y) {
    let url = `select z.*,b.name as bmname from zhiyuan z left join bumen b on z.bmid=b.id where 1=1 LIMIT ${x},${y}`;
    return url;
  },
  yuangong_bumen: function() {
    let url = `select * from bumen`;
    return url;
  },
  yuangongpost: function(info) {
    let {
      qq = "",
      jiguan = "",
      nation = "",
      sex = "",
      bmid = "",
      mobile = "",
      idcardno = "",
      des = "",
      accountname = "",
      name = "",
      state = "",
    } = info;
    state = 2;
    let password = "123456";
    let url = `INSERT INTO zhiyuan (qq, jiguan, nation, sex, bmid, mobile, idcardno, password, des, accountname, name, state) VALUES ('${qq}', '${jiguan}', '${nation}', '${sex}', ${bmid}, '${mobile}', '${idcardno}', '${password}', '${des}', '${accountname}', '${name}', ${state})`;
    return url;
  },
  yuangongput: function(info) {
    let {
      id = "",
      qq = "",
      jiguan = "",
      nation = "",
      sex = "",
      bmid = "",
      mobile = "",
      idcardno = "",
      des = "",
      accountname = "",
      name = "",
    } = info;
    let url = `UPDATE zhiyuan SET qq ='${qq}', jiguan ='${jiguan}', nation ='${nation}', sex ='${sex}', bmid =${bmid}, mobile ='${mobile}', idcardno ='${idcardno}', des ='${des}', accountname ='${accountname}', name ='${name}'  WHERE (id = ${id})`;
    return url;
  },
  yuangongdelete: function(id) {
    let url = `delete from zhiyuan where id in(${id})`;
    return url;
  },
  yuangonggetname: function(name, x, y) {
    let url = `SELECT * from zhiyuan where 1=1 and name like '%${name}%' LIMIT ${x},${y}`;
    return url;
  },
  bumenget: function(x, y) {
    let url = `select * from bumen where 1=1 LIMIT ${x}, ${y}`;
    return url;
  },
  bumenput: function(info) {
    let { id, name } = info;
    let url = `UPDATE bumen SET name='${name}' WHERE id=${id} `;
    return url;
  },
  bumenpost: function(info) {
    let { name } = info;
    let url = `INSERT INTO bumen (name) VALUES ('${name}')`;
    return url;
  },
  bumendelete: function(id) {
    let url = `delete from bumen where id in(${id})`;
    return url;
  },
  bumengetname: function(name, x, y) {
    let url = `SELECT * from bumen where 1=1 and name like '%${name}%' LIMIT ${x},${y}`;
    return url;
  },
  laorenget: function(x, y) {
    let url = `select * from elder where 1=1 LIMIT ${x}, ${y}`;
    return url;
  },
  laorenput: function(info) {
    let {
      address = "",
      birtyday = "",
      butie = "",
      des = "",
      idcardno = "",
      jiguan = "",
      mianmao = "",
      mobile = "",
      name = "",
      sex = "",
      ssperiod = 0,
      zhiye = "",
      yue = 0,
      id,
    } = info;

    birtyday = this.switchTimeFormat(birtyday);
    let url = `UPDATE elder SET address='${address}' ,birtyday='${birtyday}' , butie='${butie}' ,des='${des}' ,idcardno='${idcardno}' ,jiguan='${jiguan}' ,mianmao='${mianmao}' ,mobile='${mobile}' ,name='${name}'  ,sex='${sex}' ,ssperiod=${ssperiod} ,zhiye='${zhiye}' ,yue=${yue} WHERE id=${id}`;
    return url;
  },
  laorenpost: function(info) {
    let {
      address = "",
      birtyday = "",
      butie = "",
      des = "",
      idcardno = "",
      jiguan = "",
      mianmao = "",
      mobile = "",
      name = "",
      sex = "",
      ssperiod = 0,
      zhiye = "",
      yue = 0,
    } = info;

    let url = `INSERT INTO elder (address, birtyday, butie, des, idcardno, jiguan, mianmao, mobile, name, sex, ssperiod, zhiye,yue) VALUES ('${address}', '${birtyday}', '${butie}', '${des}', '${idcardno}', '${jiguan}', '${mianmao}', '${mobile}', '${name}', '${sex}', ${ssperiod}, '${zhiye}',${yue})`;
    return url;
  },
  laorendelete: function(id) {
    let url = `delete from elder where id in(${id})`;
    return url;
  },
  laorengetname: function(name, x, y) {
    let url = `SELECT * from elder where 1=1 and name like '%${name}%' LIMIT ${x},${y}`;
    return url;
  },
  sslouget: function(x, y) {
    let url = `select * from sslou where 1=1 LIMIT ${x}, ${y}`;
    return url;
  },
  sslouput: function(info) {
    let { id, louname } = info;
    let url = `UPDATE sslou SET  louname='${louname}' WHERE id=${id}`;
    return url;
  },
  ssloupost: function(info) {
    let { louname = "" } = info;
    let url = `INSERT INTO sslou ( louname) VALUES ('${louname}')`;
    return url;
  },
  ssloudelect: function(id) {
    let url = `delete from sslou where id in(${id})`;
    return url;
  },
  sslougetname: function(name, x, y) {
    let url = `SELECT * from sslou where 1=1 and louname like '%${name}%' LIMIT ${x},${y}`;
    return url;
  },
  usersget: function(x, y) {
    let url = `select u.*,r.name as rolename from users u ,sysrole r where u.roleid=r.id LIMIT ${x},${y}`;
    return url;
  },
  userspost: function(info) {
    let url = ``;
    return url;
  },
  usersput: function(info) {
    let {
      roleid = 0,
      sex = "",
      logtimes = "",
      realname = "",
      password = "",
      nickname = "",
      tel = "",
      email = "",
      username = "",
      id = "",
    } = info;
    if (logtimes) {
      logtimes++;
    }
    let url = `UPDATE users SET roleid =${roleid}, sex ='${sex}', logtimes =${logtimes}, realname ='${realname}', password ='${password}', nickname ='${nickname}', tel ='${tel}', email ='${email}', username ='${username}' WHERE (id =${id})`;
    return url;
  },
  usersgetname: function(name, x, y) {
    let url = `select u.*,r.name as rolename from users u ,sysrole r where u.roleid=r.id and username like '%${name}%' LIMIT ${x},${y} `;
    return url;
  },
  usersget_role: function() {
    let url = `SELECT * from Sysrole`;
    return url;
  },
  usersdelete: function(id) {
    let url = `delete from users where id in(${id})`;
    return url;
  },
  noticeget: function(x, y) {
    let url = `SELECT * from Notice where 1=1 LIMIT ${x},${y}`;
    return url;
  },
  noticeput: function(info) {
    let { content = "", createtime = "", pubren = "", title = "", id } = info;
    if (createtime) {
      createtime = this.switchTimeFormat(createtime);
    }
    let url = `UPDATE Notice SET content='${content}',createtime='${createtime}',pubren='${pubren}',title='${title}' WHERE id=${id}`;
    return url;
  },
  noticepost: function(info) {
    let {
      content = "",
      createtime = "2021-01-01",
      pubren = "",
      title = "",
    } = info;
    if (createtime) {
      createtime = this.switchTimeFormat(createtime);
    }
    let url = `INSERT INTO Notice  (content,createtime,pubren,title) VALUES ('${content}','${createtime}','${pubren}','${title}') `;
    return url;
  },
  noticedelete: function(id) {
    let url = `delete from Notice where id in(${id})`;
    return url;
  },
  noticegetname: function(name, x, y) {
    let url = `SELECT * from Notice where 1=1 and title like '%${name}%' LIMIT ${x},${y}`;
    return url;
  },
};
