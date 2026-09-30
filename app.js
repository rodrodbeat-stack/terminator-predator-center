const logs = document.getElementById("logs");
const status = document.getElementById("buildStatus");

function addLog(type, msg){
  const p=document.createElement("p");
  const now=new Date().toLocaleTimeString("es-CL",{hour12:false});
  p.innerHTML=`<time>${now}</time> <b>${type}</b> ${msg}`;
  logs.appendChild(p);
  logs.scrollTop=logs.scrollHeight;
}

function deploy(){
  status.textContent="DEPLOY RUNNING";
  addLog("INFO","Deployment iniciado por TERMINATOR");
  setTimeout(()=>addLog("PASS","Docker image validated"),500);
  setTimeout(()=>addLog("PASS","Security gates passed"),1000);
  setTimeout(()=>addLog("PASS","Production deployment completed"),1600);
  setTimeout(()=>{status.textContent="BUILD #2026.09.27 — SUCCESS"},1800);
}

function rollback(){
  status.textContent="ROLLBACK RUNNING";
  addLog("WARN","Rollback solicitado");
  setTimeout(()=>addLog("PASS","Previous stable version restored"),900);
  setTimeout(()=>{status.textContent="ROLLBACK — SUCCESS"},1200);
}
