module.exports = {
  oldget: function(x, y) {
    let url = `SELECT * from Elder where 1=1 LIMIT ${x}, ${y}`;
    return url;
  },
  oldgetname: function(name, x, y) {
    let url = `SELECT * from Elder where 1=1 and name like '%${name}%' LIMIT ${x}, ${y}`;
    return url;
  },
  healthget: function(x, y) {
    let url = `SELECT * from Healthdata where 1=1 LIMIT ${x}, ${y}`;
    return url;
  },
  healthput: function(info) {
    let {
      jcdate = "",
      xuezhi = "",
      xuetang = "",
      ssxy = "",
      name = "",
      weight = "",
      idcardno = "",
      szxy = "",
      niaosuan = "",
      id = "",
    } = info;
    jcdate = this.switchTimeFormat(jcdate);
    let url = `UPDATE healthdata SET jcdate ='${jcdate}', xuezhi ='${xuezhi}', xuetang ='${xuetang}', ssxy =${ssxy}, name ='${name}', weight =${weight}, idcardno ='${idcardno}', szxy =${szxy}, niaosuan ='${niaosuan}' WHERE (id =${id})`;
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
  healthpost: function(info) {
    let {
      jcdate = "",
      xuezhi = "",
      xuetang = "",
      ssxy = "",
      name = "",
      weight = "",
      idcardno = "",
      szxy = "",
      niaosuan = "",
    } = info;
    jcdate = this.switchTimeFormat(jcdate);
    let url = `INSERT INTO healthdata (jcdate, xuezhi, xuetang, ssxy,name, weight, idcardno,szxy,niaosuan) VALUES ('${jcdate}','${xuezhi}','${xuetang}',${ssxy},'${name}',${weight},'${idcardno}',${szxy},'${niaosuan}')`;
    return url;
  },
  healthdelete: function(id) {
    let url = `DELETE from healthdata where id=${id}`;
    return url;
  },
  healthget_elder: function() {
    let url = `SELECT * FROM Elder`;
    return url;
  },
  healthgetname(name, x, y) {
    let url = `SELECT * from healthdata where 1=1 and name like '%${name}%' LIMIT ${x}, ${y}`;
    return url;
  },
  huliget(x, y) {
    let url = `SELECT * from huli where 1=1 LIMIT ${x}, ${y}`;
    return url;
  },
  hulipost(info) {
    let {
      name = "",
      idcardno = "",
      yuefen = "",
      hlfee = 0,
      cwfee = 0,
      totalfee = 0,
    } = info;
    let url = `INSERT INTO Huli (name,idcardno,yuefen,hlfee,cwfee,totalfee) VALUES ('${name}','${idcardno}','${yuefen}',${hlfee},${cwfee},${totalfee})`;
    return url;
  },
  huligetname(name, x, y) {
    let url = `SELECT * from huli where 1=1 and name like '%${name}%' LIMIT ${x},${y}`;
    return url;
  },
  huliput(info) {
    let {
      name = "",
      idcardno = "",
      yuefen = "",
      hlfee = 0,
      cwfee = 0,
      totalfee = 0,
      id = "",
    } = info;
    let url = `UPDATE huli SET name ='${name}',idcardno='${idcardno}',yuefen='${yuefen}',hlfee=${hlfee},cwfee=${cwfee},totalfee=${totalfee} WHERE id=${id} `;
    return url;
  },
  hulidelete(id) {
    let url = `DELETE from huli where id=${id}`;
    return url;
  },
  laifangget(x, y) {
    let url = `select l.*, e.name as ename, e.idcardno as eidcardno from laifang l left join elder e on e.id=l.targetid where 1=1 LIMIT ${x},${y}`;
    return url;
  },
  laifangput(info) {
    let {
      targetid = "",
      title = "",
      creattime = "",
      lfrcardno = "",
      des = "",
      id = "",
    } = info;
    creattime = this.switchTimeFormat(creattime);
    let url = `UPDATE Laifang SET targetid='${targetid}',title='${title}',creattime='${creattime}',lfrcardno='${lfrcardno}',des='${des}' WHERE id=${id}`;
    return url;
  },
  laifangpost: function(info) {
    let {
      targetid = "",
      title = "",
      creattime = "",
      lfrcardno = "",
      des = "",
    } = info;
    // creattime = this.switchTimeFormat(creattime);
    let url = `INSERT INTO Laifang (targetid,title,creattime,lfrcardno,des) VALUES (${targetid},'${title}','${creattime}','${lfrcardno}','${des}')`;
    return url;
  },
  laifangdelete: function(id) {
    let url = `DELETE from Laifang where id=${id}`;
    return url;
  },
  laifanggetname: function(name, x, y) {
    let url = `select l.*, e.name as ename, e.idcardno as eidcardno from laifang l left join elder e on e.id=l.targetid where 1=1 and l.title like '%${name}%' LIMIT ${x},${y}`;
    return url;
  },
  noticeget: function(x, y) {
    let url = `SELECT * from notice where 1=1 LIMIT ${x}, ${y}`;
    return url;
  },
  noticegetname: function(name, x, y) {
    let url = `SELECT * from Notice where 1=1 and title like '%${name}%' LIMIT ${x},${y}`;
    return url;
  },
  leavesget: function(name, x, y) {
    let url = `SELECT * from Leaves where 1=1 and accountname ='${name}' LIMIT ${x}, ${y} `;
    return url;
  },
  leaveput: function(info) {
    let {
      accountname = "",
      applydes = "",
      applytime = "",
      begdate = "",
      enddate = "",
      tianshu = "",
      xtype = "",
      id,
    } = info;
    let status = 1;
    applytime = new Date();
    applytime = applytime.toLocaleDateString().replace(/\//g, "-");
    begdate = this.switchTimeFormat(begdate);
    enddate = this.switchTimeFormat(enddate);
    let url = `UPDATE Leaves SET accountname="${accountname}",applydes="${applydes}",applytime="${applytime}",begdate="${begdate}",enddate="${enddate}",tianshu=${tianshu},xtype="${xtype}",status=${status} WHERE id=${id}`;
    return url;
  },
  leavepost: function(info) {
    let {
      accountname = "",
      applydes = "",
      applytime = "",
      begdate = "",
      enddate = "",
      tianshu = 1,
      xtype = "",
      zgname = "",
      reply = "",
      shenpiren = "",
      shenpitime = "",
      status = 1,
    } = info;
    applytime = new Date();
    applytime = applytime.toLocaleDateString().replace(/\//g, "-");
    shenpitime = new Date();
    shenpitime = shenpitime.toLocaleDateString().replace(/\//g, "-");

    let url = `INSERT INTO Leaves (accountname,applydes,applytime, begdate ,enddate,tianshu,xtype,zgname,reply,shenpiren,shenpitime,status) VALUES ("${accountname}","${applydes}","${applytime}","${begdate}","${enddate}",${tianshu},"${xtype}","${zgname}","${reply}","${shenpiren}","${shenpitime}",${status})`;
    return url;
  },
  leavesdelete: function(id) {
    let url = `DELETE from Leaves where id=${id}`;
    return url;
  },
  leavesgetname: function(name, title, x, y) {
    let url = `SELECT * from Leaves where 1=1 and accountname ='${name}' and xtype like '%${title}%' LIMIT ${x}, ${y}`;
    return url;
  },
};
