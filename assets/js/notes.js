const notesList = [
    {
        title: "Dakuon (濁音)",
        noteContent: `
        <h3>What is Dakuon?</h3>
        <p>Dakuon is the kana with two small dots. It is the voiced sound of か [ka], さ [sa], た [ta] and は [ha]-row syllables. Let's take a look at how they compare.</p>
        <h3>Compare to Dakuon</h3>
        <hr>
        <h3>KA ROW</h3>
        <p>か カ = ka | が ガ = ga</p>
        <p>き キ = ki | ぎ ギ = gi</p>
        <p>く ク = ku | ぐ グ = gu</p>
        <p>け ケ = ke | げ ゲ = ge</p>
        <p>こ コ = ko | ご ゴ = go</p>

        <hr>
        <h3>SA ROW</h3>
        <p>さ サ = sa | ざ ザ = za</p>
        <p>し シ = shi | じ ジ = ji</p>
        <p>す ス = su | ず ズ = zu</p>
        <p>せ セ = se | ぜ ゼ = ze</p>
        <p>そ ソ = so | ぞ ゾ = zo</p>
        
        <hr>
        <h3>TA ROW</h3>
        <p>た タ = ta | だ ダ = da</p>
        <p>ち チ = chi | ぢ ヂ = ji</p>
        <p>つ ツ = tsu | づ ヅ = zu</p>
        <p>て テ = te | で デ = de</p>
        <p>と ト = to | ど ド = do</p>
        
        <hr>
        <h3>HA ROW</h3>
        <p>は ハ = ha | ば バ = ba</p>
        <p>ひ ヒ = hi | び ビ = bi</p>
        <p>ふ フ = fu | ぶ ブ = bu</p>
        <p>へ ヘ = he | べ ベ = be</p>
        <p>ほ ホ = ho | ぼ ボ = bo</p>
        `
    }
]


notesList.forEach(note => {
    notesArea.insertAdjacentHTML("beforeend", `
    <!-- Note Item -->
    <div class="note">
        <div class="note__title-cont">
            <h2 class="note__title">${note.title}</h2>
            <i class="fas fa-plus more-button"></i>
        </div>
        <!-- Note Content -->
        <div class="note__content hidden">
            ${note.noteContent}
        </div>  
    </div>
    `)
})

