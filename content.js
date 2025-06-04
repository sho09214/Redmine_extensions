(() => {
  // 1. Redmineのチケット番号を取得
  const targetTicketTitleNumberElement = document.querySelector('.inline-flex');
  const ticketTitleText = targetTicketTitleNumberElement?.textContent?.trim();
  const ticketNumber = "#" + ticketTitleText.split('#')[1];

  // 2. Redmineのチケットタイトルを取得
  const targetTicketTitleElement = document.querySelector('.subject h3');
  const ticketTitle = targetTicketTitleElement?.textContent?.trim();

  // 3. チケット番号、チケットタイトル取得エラー時
  if (!ticketTitle || !ticketNumber) {
    console.error("チケット番号またはタイトルが取得できませんでした。");
  }

  // 2. テキストを加工（ここでは大文字に変換の例）
  const result = ticketNumber + " " + ticketTitle;

  // 3. コピー用ボタンを含む新しい要素を作成
  const copyButtonDiv = document.createElement('div');
  copyButtonDiv.style.border = "1px solid #0078D7";
  copyButtonDiv.style.padding = "8px";
  copyButtonDiv.style.marginTop = "10px";
  copyButtonDiv.style.backgroundColor = "#f0f8ff";

  const p = document.createElement('p');
  p.textContent = result;
  copyButtonDiv.appendChild(p);

  const copyBtn = document.createElement('button');
  copyBtn.textContent = "コピー";
  copyBtn.style.marginTop = "5px";
  

  copyButtonDiv.appendChild(copyBtn);

  // 4. ページに差し込む（説明欄の直後に挿入）
  const targetElement = document.querySelector('.author');

  // 親のコンテナを作成
  const container = document.createElement('div');
  container.style.marginTop = '1em';
  container.appendChild(copyButtonDiv);

  // まとめて挿入
targetElement.parentNode.insertBefore(container, targetElement.nextSibling);
})();
