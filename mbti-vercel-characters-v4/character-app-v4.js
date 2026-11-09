"use strict";

// Positive scores correspond to the first letter of each axis.
const questions = [
  {axis:"EI",emoji:"🏰",title:"이세계 첫날, 길드에서 환영 파티를 열어줬다!",options:["처음 보는 모험가에게 먼저 말을 건다.","옆자리 사람과 가볍게 대화를 시작한다.","아는 사람이 생기면 그때 이야기를 나눈다.","조용한 구석에서 길드 고양이와 친해진다."]},
  {axis:"SN",emoji:"🗺️",title:"신이 정체불명의 지도를 건넸다. 가장 먼저?",options:["지도에 숨겨진 다른 세계를 상상한다.","기호에 특별한 의미가 있을지 추측한다.","지형과 실제 풍경이 일치하는지 살핀다.","거리와 길 표시부터 하나씩 확인한다."],reverse:true},
  {axis:"TF",emoji:"🧪",title:"동료가 실수로 회복약을 전부 쏟았다!",options:["동료가 놀라지 않았는지 먼저 살핀다.","괜찮다고 말하고 함께 수습한다.","남은 자원으로 해결할 방법을 찾는다.","원인을 파악하고 재발 방지책을 세운다."],reverse:true},
  {axis:"JP",emoji:"🎒",title:"내일 아침 던전으로 출발한다. 오늘 밤 나는?",options:["준비물과 출발 시간을 목록으로 정리한다.","필수 장비를 챙기고 대략 일정을 잡는다.","꼭 필요한 것만 챙기고 현장에서 정한다.","일단 자고, 아침의 나에게 맡긴다."]},
  {axis:"EI",emoji:"🍵",title:"긴 모험이 끝났다. 기력을 회복하는 방법은?",options:["방에서 혼자 쉬며 하루를 정리한다.","한적한 곳에서 잠깐 혼자 시간을 보낸다.","친한 동료와 수다를 떨며 쉰다.","모두 불러 모아 모험 뒷이야기를 나눈다."],reverse:true},
  {axis:"SN",emoji:"🔮",title:"수상한 상인이 처음 보는 마법 도구를 판다.",options:["작동 시범과 사용법을 확인한다.","실제로 어디에 쓸 수 있는지 묻는다.","다르게 응용할 방법을 떠올린다.","이 도구로 뒤집힐 세상을 상상한다."]},
  {axis:"TF",emoji:"⚖️",title:"마왕을 물리친 보상을 어떻게 나눌까?",options:["역할과 기여도를 기준으로 나눈다.","모두가 납득할 분배 원칙을 정한다.","동료마다 지금 필요한 것이 뭔지 듣는다.","서운한 사람이 없도록 사정을 먼저 고려한다."]},
  {axis:"JP",emoji:"🌲",title:"목적지로 가는 길에 신비한 숲을 발견했다.",options:["당장 들어간다. 이런 기회는 못 참지!","일정은 조금 바뀌어도 괜찮으니 둘러본다.","남은 일정을 확인하고 잠깐 구경한다.","오늘의 임무를 마치고 탐방 일정을 따로 잡는다."],reverse:true},
  {axis:"EI",emoji:"💬",title:"새로운 마법 아이디어를 정리할 때 나는?",options:["혼자 생각을 충분히 정리한 뒤 이야기한다.","메모를 해보고 가까운 동료에게 보여준다.","동료에게 말하다 보면 생각이 정리된다.","바로 모임을 열고 함께 아이디어를 쏟아낸다."],reverse:true},
  {axis:"SN",emoji:"📜",title:"전설의 용에 대한 책을 읽었다. 기억에 남는 것은?",options:["용이 상징하는 의미와 숨겨진 복선.","이 전설에서 이어질 새로운 이야기.","용의 습성과 모험가의 실제 경험.","발견 장소, 크기, 약점 같은 구체적인 정보."],reverse:true},
  {axis:"TF",emoji:"🛡️",title:"친구가 새 갑옷을 보여주며 의견을 물었다.",options:["친구에게 어떤 의미인지 먼저 묻는다.","마음에 든 부분부터 말하고 의견을 덧붙인다.","장점과 아쉬운 부분을 균형 있게 말한다.","방어력과 무게를 따져 솔직히 평가한다."],reverse:true},
  {axis:"JP",emoji:"📋",title:"길드 축제 준비를 맡게 됐다!",options:["담당자와 마감일을 미리 정한다.","큰 순서와 준비 항목을 먼저 잡는다.","기본 방향만 잡고 좋은 아이디어를 더한다.","준비하면서 생기는 흐름에 맞춰 만들어간다."]},
  {axis:"EI",emoji:"🐉",title:"새 파티에 합류했다. 첫 모험에서 나는?",options:["직접 대화를 이끌며 빠르게 가까워진다.","먼저 몇 가지 질문을 하며 분위기를 푼다.","팀의 분위기를 살피다 자연스럽게 참여한다.","일단 관찰하며 내 속도대로 가까워진다."]},
  {axis:"SN",emoji:"✨",title:"새 마법을 배울 때 편한 방식은?",options:["시범을 따라 하며 순서대로 익힌다.","구체적인 예제부터 연습한다.","원리를 이해하고 응용해본다.","전체 개념을 연결해 나만의 방식을 찾는다."]},
  {axis:"TF",emoji:"👑",title:"길드장이 되었다. 어려운 결정을 내려야 한다면?",options:["일관된 기준과 예상 결과를 우선한다.","장단점을 비교해 가장 타당한 쪽을 고른다.","관련된 사람들의 입장과 영향을 살핀다.","구성원들의 가치와 관계를 가장 먼저 생각한다."]},
  {axis:"JP",emoji:"🚪",title:"신이 귀환 날짜를 정하라고 한다. 나는?",options:["좀 더 돌아보고 그때그때 결정하고 싶다.","대략 생각은 하되 선택지를 열어둔다.","가능한 날짜를 골라 일정을 잡는다.","날짜를 확정하고 남은 모험을 계획한다."],reverse:true}
];

// Original names not available in the planning record are identified as working titles.
const results = {
  ISTJ:{emoji:"🛡️",title:"원칙 철벽 수호기사",description:"약속한 시간에 방패까지 닦고 나타나는 파티의 든든한 기준점. 꼼꼼한 준비와 책임감으로 혼란스러운 이세계에도 질서를 세워요."},
  ISFJ:{emoji:"🌿",title:"몰래 챙겨주는 치유사",description:"아무 말 없이 동료의 회복약을 채워두는 따뜻한 조력자. 작은 변화도 놓치지 않고, 익숙한 사람들을 세심하게 보살펴요."},
  INFJ:{emoji:"🔮",title:"속마음 읽는 예언자",description:"말하지 않은 고민까지 눈치채는 신비한 길잡이. 나만의 가치와 깊은 통찰로 모두에게 의미 있는 모험의 방향을 찾아요."},
  INTJ:{emoji:"♟️",title:"마왕성 설계하는 전략가",description:"마왕을 만나기 전부터 공략의 다음 수까지 생각하는 타입. 혼자 깊이 구상하고, 더 나은 방법을 찾아 큰 그림을 완성해요."},
  ISTP:{emoji:"🥷",title:"귀찮음 만렙 암살자",description:"평소에는 조용하지만 문제가 생기면 손부터 움직이는 해결사. 복잡한 설명보다 직접 해보는 편이고, 실전에서 유연하게 길을 찾아요."},
  ISFP:{emoji:"🎨",title:"감성 충전 숲의 정령",description:"던전 한복판에서도 예쁜 버섯을 발견하는 모험가. 자기만의 감각과 가치를 소중히 여기며, 조용하고 자유롭게 순간을 즐겨요."},
  INFP:{emoji:"🌙",title:"상상 과몰입 달빛 시인",description:"몬스터에게도 사연이 있을 거라 믿는 이야기꾼. 풍부한 상상력과 진심을 품고, 나에게 의미 있는 모험을 끝까지 따라가요."},
  INTP:{emoji:"⚗️",title:"왜요 무한반복 연금술사",description:"마법이 왜 작동하는지 궁금해서 밤을 새우는 탐구자. 당연한 규칙에도 질문을 던지고, 새로운 논리와 가능성을 발견해요."},
  ESTP:{emoji:"⚔️",title:"일단 돌진 돌격용사",description:"설명서를 읽는 사이 이미 던전 입구를 연 행동파. 눈앞의 상황을 빠르게 읽고, 직접 부딪치며 쓸 만한 해결책을 찾아요."},
  ESFP:{emoji:"🎪",title:"던전도 무대로 만드는 광대",description:"파티가 지칠 때 분위기를 바꿔주는 이세계의 무대 체질. 주변 사람들과 현재를 즐기고, 현장의 변화에 재빠르게 반응해요."},
  ENFP:{emoji:"🌈",title:"사고뭉치 무지개 마법사",description:"세계를 구하러 갔다가 마왕과 친구가 될지도 모르는 타입. 사람과 가능성에 호기심이 많고, 새로운 모험에 마음이 먼저 뛰어요."},
  ENTP:{emoji:"🃏",title:"마왕과 토론하는 마법사",description:"금지된 마법 앞에서도 ‘다른 방법은 없을까?’를 묻는 발명가. 다양한 관점을 오가며 익숙한 규칙을 재미있게 뒤집어요."},
  ESTJ:{emoji:"📋",title:"퀘스트 마감 지키는 길드장",description:"흩어진 파티원을 모아 임무를 완수하는 운영의 달인. 분명한 기준과 실행력으로 계획을 실제 성과로 바꾸는 데 능숙해요."},
  ESFJ:{emoji:"🍲",title:"파티원 밥 챙기는 성기사",description:"모험의 시작은 동료들의 식사 확인부터인 든든한 동행. 사람들의 필요를 살피고, 함께 지킬 약속과 협력을 소중히 여겨요."},
  ENFJ:{emoji:"☀️",title:"응원으로 각성시키는 용사",description:"동료의 가능성을 알아보고 먼저 손을 내미는 리더. 모두가 함께 성장할 수 있도록 마음을 모으고 모험에 의미를 더해요."},
  ENTJ:{emoji:"👑",title:"세계 정복 일정 잡는 지휘관",description:"최종 보스를 향한 목표와 작전을 선명하게 그리는 지휘관. 도전을 피하지 않고, 사람과 자원을 움직여 큰 계획을 실현해요."}
};
const axes = ["EI","SN","TF","JP"];
const axisNames = {EI:["외향 E","내향 I"],SN:["감각 S","직관 N"],TF:["사고 T","감정 F"],JP:["판단 J","인식 P"]};
let answers = Array(questions.length).fill(null);
let currentQuestion = 0;
let currentResult = null;
let sharing = false;
const $ = id => document.getElementById(id);

function calculateResult(selectedAnswers) {
  if (selectedAnswers.length !== questions.length || selectedAnswers.some(a => !Number.isInteger(a) || a < 0 || a > 3)) throw new Error("모든 질문에 답해주세요.");
  const scores = Object.fromEntries(axes.map(axis => [axis,0]));
  questions.forEach((question,i) => { scores[question.axis] += [3,1,-1,-3][selectedAnswers[i]] * (question.reverse ? -1 : 1); });
  const ratios = {};
  const type = axes.map(axis => {
    // Four questions per axis can tie. The first answer on that axis breaks ties.
    const first = questions.findIndex(question => question.axis === axis);
    const tieScore = [3,1,-1,-3][selectedAnswers[first]] * (questions[first].reverse ? -1 : 1);
    ratios[axis] = Math.round((scores[axis] + 12) / 24 * 100);
    return axis[(scores[axis] || tieScore) > 0 ? 0 : 1];
  }).join("");
  return {type,ratios,scores};
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => { screen.hidden = screen.id !== id; });
  window.scrollTo({top:0,behavior:"instant"});
}

function renderQuestion() {
  const question = questions[currentQuestion];
  $("question-tag").textContent = `SCENE ${String(currentQuestion + 1).padStart(2,"0")}`;
  $("question-emoji").textContent = question.emoji;
  $("question-title").textContent = question.title;
  $("progress-label").textContent = `${currentQuestion + 1} / ${questions.length}`;
  const completed = answers.filter(answer => answer !== null).length;
  $("progress").value = completed;
  $("progress").setAttribute("aria-valuetext",`${questions.length}문항 중 ${completed}문항 답변 완료`);
  $("answers").replaceChildren();
  question.options.forEach((option,index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.setAttribute("aria-pressed",String(answers[currentQuestion] === index));
    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = "ABCD"[index];
    letter.setAttribute("aria-hidden","true");
    const label = document.createElement("span");
    label.textContent = option;
    button.append(letter,label);
    button.addEventListener("click",() => {
      answers[currentQuestion] = index;
      [...$("answers").children].forEach((child,i) => child.setAttribute("aria-pressed",String(i === index)));
      $("next-button").disabled = false;
      $("progress").value = answers.filter(answer => answer !== null).length;
      $("progress").setAttribute("aria-valuetext",`${questions.length}문항 중 ${$("progress").value}문항 답변 완료`);
      $("god-reaction").textContent = ["오, 그런 방법이! 신도 메모 좀 할게요.","좋아요. 소환 기록에 신중하게 적어둘게요.","흠… 예상과 다르지만, 꽤 당신답네요!","확인! 제 실수도 이렇게 수습할 수 있을까요?"][index];
    });
    $("answers").append(button);
  });
  $("previous-button").disabled = currentQuestion === 0;
  $("next-button").disabled = answers[currentQuestion] === null;
  $("next-button").textContent = currentQuestion === questions.length - 1 ? "내 결과 확인하기 ✦" : "다음 질문 →";
  $("god-reaction").textContent = answers[currentQuestion] === null ? "신이 당신의 선택을 기다리고 있어요." : "이전에 고른 답이에요. 마음이 바뀌었다면 수정해도 좋아요.";
  $("question-title").focus();
}

function renderResult(result) {
  currentResult = result;
  const character = results[result.type];
  $("result-type").textContent = result.type;
  const characterIndex = Object.keys(results).indexOf(result.type);
  $("result-character").style.backgroundPosition = `${(characterIndex % 4) * 100 / 3}% ${Math.floor(characterIndex / 4) * 100 / 3}%`;
  $("result-character").setAttribute("aria-label",`${character.title} 3D 미니 캐릭터`);
  $("result-title").textContent = character.title;
  $("result-description").textContent = character.description;
  $("ratios").replaceChildren();
  axes.forEach(axis => {
    const value = result.ratios[axis];
    const row = document.createElement("div"); row.className = "ratio";
    const labels = document.createElement("div"); labels.className = "ratio-labels";
    axisNames[axis].forEach((label,index) => {
      const span = document.createElement("span");
      span.textContent = `${label} ${index === 0 ? value : 100-value}%`;
      if (result.type.includes(axis[index])) span.className = "dominant";
      labels.append(span);
    });
    const bar = document.createElement("div"); bar.className = "ratio-bar"; bar.setAttribute("aria-hidden","true");
    const fill = document.createElement("div"); fill.className = "ratio-fill"; fill.style.width = `${value}%`;
    bar.append(fill); row.append(labels,bar); $("ratios").append(row);
  });
  $("share-status").textContent = "";
  $("share-fallback").hidden = true;
  showScreen("result-screen");
  $("result-title").focus();
}

async function shareResult() {
  if (!currentResult || sharing) return;
  sharing = true;
  $("share-button").disabled = true;
  $("share-status").textContent = "";
  $("share-fallback").hidden = true;
  const character = results[currentResult.type];
  const text = `「이세계 왔는데 왜 내가 이래?」\n${character.emoji} ${currentResult.type} · ${character.title}\n${character.description}`;
  const publicUrl = /^https?:$/.test(location.protocol) ? location.href.split("#")[0] : "";
  const fullText = text + (publicUrl ? `\n${publicUrl}` : "");
  try {
    if (typeof navigator.share === "function") {
      await navigator.share({title:"이세계 왔는데 왜 내가 이래?",text,...(publicUrl ? {url:publicUrl} : {})});
      $("share-status").textContent = "공유를 완료했어요!";
      return;
    }
    await copyOrShow();
  } catch (error) {
    if (error.name === "AbortError") $("share-status").textContent = "공유를 취소했어요. 언제든 다시 공유할 수 있어요.";
    else await copyOrShow();
  } finally {
    sharing = false;
    $("share-button").disabled = false;
  }
  async function copyOrShow() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("복사 기능 미지원");
      await navigator.clipboard.writeText(fullText);
      $("share-status").textContent = "결과를 복사했어요! 친구와의 대화에 붙여넣어 주세요.";
    } catch {
      $("share-status").textContent = "아래 결과 문구를 직접 복사해서 공유해주세요.";
      $("share-fallback").hidden = false;
      $("share-text").value = fullText;
      $("share-text").focus();
      $("share-text").select();
    }
  }
}

$("start-button").addEventListener("click",() => {showScreen("quiz-screen");renderQuestion();});
$("previous-button").addEventListener("click",() => {if(currentQuestion > 0){currentQuestion--;renderQuestion();}});
$("next-button").addEventListener("click",() => {
  if(answers[currentQuestion] === null) return;
  if(currentQuestion < questions.length-1){currentQuestion++;renderQuestion();}
  else renderResult(calculateResult(answers));
});
$("restart-button").addEventListener("click",() => {
  answers = Array(questions.length).fill(null);currentQuestion = 0;currentResult = null;
  showScreen("start-screen");$("start-button").focus();
});
$("share-button").addEventListener("click",shareResult);
