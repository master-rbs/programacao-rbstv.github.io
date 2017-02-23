var dateNow = new Date();
var dd = dateNow.getDate();
var ww = dateNow.getDay();
var mm = dateNow.getMonth() + 1;
var yyyy = dateNow.getFullYear();
if (dd < 10) {
    dd = '0' + dd
};
if (mm < 10) {
    mm = '0' + mm
};
var dateNow = dd + '/' + mm + '/' + yyyy;
var mailing = {
    //DIARIAMENTE
    progReport: {
        item: `<li class="fa pointer" onclick="javascript:mailToss('progReport')"><span class="notfa"> Relatório da Programação</span></li>`
        , assunto: "RELATÓRIO DA PROGRAMAÇÃO - " + dateNow
        , emails: [
            "CoordenacaoRBSTV;"
            , "daniel bittencourt;"
            , "jeanpresser@gmail.com;"
            , "ManutencaoTVPOA;"
            , "opecbag@rbstv.com.br;"
            , "opeccxs@rbstv.com.br;"
            , "opeccal@rbstv.com.br;"
            , "opecere@rbstv.com.br;"
            , "opecpfo@rbstv.com.br;"
            , "opecpel@rbstv.com.br;"
            , "opecrge@rbstv.com.br;"
            , "opecstc@rbstv.com.br;"
            , "opecsma@rbstv.com.br;"
            , "opecstr@rbstv.com.br;"
            , "opecuru@rbstv.com.br;"
            , "opecrs1@rbstv.com.br;"
            , "simone donini;"
            , "sistemas broadcast;"
        ]
    }
    , mediaCham: {
        item: `<li class="fa pointer" onclick="javascript:mailToss('mediaCham')"><span class="notfa"> Mídia de Chamadas</span></li>`
        , assunto: "CHAMADAS RBS TV - " + dateNow
        , emails: [
            "CoordenacaoRBSTV;"
            , "daniel bertoli;"
            , "jairo piscitelli;"
            , "pedro oselame;"
            , "vinicius moller;"
        ]
    }, // SEG A SAB
    fades: {
        item: `<li class="fa pointer" onclick="javascript:mailToss('fades')"><span class="notfa"> FADES</span></li>`
        , assunto: "FADE + CH J.A / G.E / REDAÇÃO RS || FADE + CH RBS N. / REDAÇÃO RS - " + dateNow
        , emails: [
            "adriana sa;"
            , "bruna zanatta;"
            , "guilherme canal;"
            , "IngestTVPOA;"
            , "leo saballa;"
            , "maria polo;"
            , "OperadoresSuitesRBSTVPOA;"
            , "RedacaoJANews;"
            , "rosangela angrizani;"
            , "Joyce silva;"
            , "gustavo schwabe;"
            , "Andressa pesce;"
            , "jeferson pacheco;"
            , "marcos westermann;"
            , "marcelo cabral;"
            , "leonice sordi;"
        ]
    }, //SEG A SEX
    stock: {
        item: `<li class="fa pointer" onclick="javascript:mailToss('stock')"><span class="notfa"> Estoque Disponível RSC (SEG - SEX)</span></li>`
        , assunto: "ESTOQUE DISPONÍVEL RBS TV RS/SC - " + dateNow
        , emails: [
            "CoordenacaoRBSTV;"
            , "andre.lopes@tvglobo.com.br;"
            , "guilherme.florentino@tvglobo.com.br;"
            , "jorge.nogueira@tvglobo.com.br;"
            , "jose.martinez@tvglobo.com.br;"
            , "luizgo@tvglobo.com.br;"
            , "marcio.alvaro@tvglobo.com.br;"
            , "marco.faria@tvglobo.com.br;"
            , "andre.carvalho@tvglobo.com.br;"
        ]
    }
    , previaHora: {
        item: `<li class="fa pointer" onclick="javascript:mailToss('previaHora')"><span class="notfa"> Prévia IBOPE Hora1</span></li>`
        , assunto: "PRÉVIA IBOPE H1 / BDRG – " + dateNow
        , emails: [
            "daniela selistre;"
            , "CoordenacaoRBSTV;"
            , "michelle guerra;"
            , "ariane jorej;"
            , "ellen appel;"
            , "caio klein;"
            , "marcelo cabral;"
            , "jefferson pacheco;"

        ]
    }
    , previaENC: {
        item: `<li class="fa pointer" onclick="javascript:mailToss('previaENC')"><span class="notfa"> Prévia IBOPE Tarde</span></li>`
        , assunto: "PRÉVIA IBOPE - ENC / JA / GE / JH - " + dateNow
        , emails: [
            "Coordenacao RBSTV CoordenacaoRBSTV;"
            , "ana assumpcao;"
            , "ariane jorej;"
            , "cezar freitas;"
            , "daniel bertoli;"
            , "ellen appel;"
            , "gustavo schwabe;"
            , "michelle guerra;"
            , "pedro oselame;"
            , "thiago morao;"
            , "tiago cirqueira;"
            , "caio klein;"
            , "amanda pereira;"
            , "marcelo cabral;"
            , "jefferson pacheco;"
        ]
    }
    , previaIBOPEdata: {
        item: `<li class="fa pointer" onclick="javascript:mailToss('previaIBOPEdata')"><span class="notfa"> Prévia IBOPE Noite</span></li>`
        , assunto: " PRÉVIA IBOPE RBSN - " + dateNow
        , emails: [
            "CoordenacaoRBSTV;"
            , "cezar freitas;"
            , "eloi zorzetto;"
            , "simone donini;"
            , "ellen appel;"
            , "caio klein;"
            , "marcelo cabral;"
            , "jefferson pacheco;"
        ]
    }, //SEXTAS
    mapaCorte: {
        item: `<li class="fa pointer" onclick="javascript:mailToss('mapaCorte')"><span class="notfa"> Mapa Cortes RSE</span></li>`
        , assunto: "MAPA DE CORTE RBS TV - " + dateNow
        , emails: [
            "CoordenacaoRBSTV;"
        ]
    }, //SÁBADOS
    previaIBOPEsab: {
        item: `<li class="fa pointer" onclick="javascript:mailToss('previaIBOPEsab')"><span class="notfa"> Prévia IBOPE Sábado</span></li>`
        , assunto: "PRÉVIA IBOPE SÁBADO - " + dateNow
        , emails: [
            "CoordenacaoRBSTV;"
            , "ana assumpcao;"
            , "cezar freitas;"
            , "daniel bertoli;"
            , "daniela selistre;"
            , "daniela ungaretti;"
            , "ellen appel;"
            , "fernando alencastro;"
            , "gustavo schwabe;"
            , "laura medina;"
            , "leonice sordi;"
            , "rafaela melz;"
            , "rodaika@rbstv.com.br;"
            , "thiago morao;"
            , "tiago cirqueira;"
            , "william mayer;"
            , "amanda pereira;"
            , "tiago pinho;"
        ]
    }
    , espacoRedacao: {
        item: `<li class="fa pointer" onclick="javascript:mailToss('espacoRedacao')"><span class="notfa"> Fade Redação</span></li>`
        , assunto: "FADE REDAÇÃO RS DOMINGO - " + dateNow
        , emails: [
            "adriana sa;"
            , "bruna zanatta;"
            , "daniella peretti;"
            , "guilherme canal;"
            , "igor roza;"
            , "IngestTVPOA;"
            , "leo saballa;"
            , "maria polo;"
            , "OperadoresSuitesRBSTVPOA;"
            , "RedacaoJANews;"
            , "rosangela angrizani;"
            , "Joyce silva;"

        ]
    }, //DOMINGOS
    previaCAM: {
        item: `<li class="fa pointer" onclick="javascript:mailToss('previaCAM')"><span class="notfa"> Prévia IBOPE Domingo</span></li>`
        , assunto: "PRÉVIA IBOPE DOMINGO - " + dateNow
        , emails: [
            "CoordenacaoRBSTV;"
            , "anselmo prada;"
            , "caio klein;"
            , "cezar freitas;"
            , "daniel bertoli;"
            , "daniela selistre;"
            , "daniela ungaretti;"
            , "ellen appel;"
            , "eurico meira;"
            , "fernando alencastro;"
            , "gino basso;"
            , "leonice sordi;"
            , "neto fagundes;"
            , "rosana orlandi;"
            , "shana muller;"
            , "anderson vargas;"
            , "jefferson pacheco;"
            , "tiago cirqueira;"
        ]
    }, //QUARTAS
    planPROG: {
        item: `<li class="fa pointer" onclick="javascript:mailToss('planPROG')"><span class="notfa"> Planejamento Programação</span></li>`
        , assunto: "PLANEJAMENTO PROGRAMAÇÃO RBSTV - " + dateNow
        , emails: [
            "CoordenacaoRBSTV;"
            , "lele@rbstv.com.br;"
            , "leonardo.persigo@gruporbs.com.br;"
            , "leonice sordi;"
            , "ManutencaoTVPOA;"
            , "neca@rbstv.com.br;"
            , "mariana pessin;"
            , "PlanejamentoRS2;"
            , "mauricio saraiva;"
            , "monica flores;"
            , "norton kappel;"
            , "renan blanco;"
            , "rodaika@rbstv.com.br;"
            , "rosana orlandi;"
            , "rosangela angrizani;"
            , "sistemas broadcast;"
            , "telefonia tv;"
            , "ticiano osorio;"
            , "vinicius vasconcellos;"
            , "wagner cunha;"
            , "wesley cardias;"
            , "opecbag@rbstv.com.br;"
            , "opeccxs@rbstv.com.br;"
            , "opeccal@rbstv.com.br;"
            , "opecere@rbstv.com.br;"
            , "opecpfo@rbstv.com.br;"
            , "opecpel@rbstv.com.br;"
            , "opecrge@rbstv.com.br;"
            , "opecstc@rbstv.com.br;"
            , "opecsma@rbstv.com.br;"
            , "opecstr@rbstv.com.br;"
            , "opecuru@rbstv.com.br;"
            , "opecrs1@rbstv.com.br;"
            , "anderson vargas;"
            , "andre vanazzi;"
            , "andrea correa;"
            , "donadio@gruporbs.com.br;"
            , "bernardo barcellos;"
            , "camila.sa.com ri;"
            , "candida ortiz;"
            , "carina koppe.;"
            , "cat@rbstv.com.br;"
            , "clacir balotin;"
            , "cristiane bazilio;"
            , "cristiane dill;"
            , "cristina ranzolin;"
            , "daniela selistre;"
            , "debora pradella;"
            , "eduardo rigon;"
            , "eduardo severojr;"
            , "fernando alencastro;"
            , "flavia requiao;"
            , "gino basso;"
            , "guiatv@zerohora.com.br;"
            , "mario santos;"
            , "hojenatv@zerohora.com.br;"
            , "isabel ferrari;"
            , "jairo.lacks@gruporbs.com.br;"
            , "jairo piscitelli;"
            , "joao moreirajr;"
            , "joel junior;"
            , "karen.sinhor@diario.com.br;"
            , "segundocaderno@zerohora.com.br;"
            , "emanuel pra;"
            , "ProgramacaoRS;"
            , "emanuel pra;"
            , "leonardo.persigo@gruporbs.com.br;"
            , "CoordenacaodeProgramacaoSC1;"
            , "naiara tups;"
            , "william mayer;"
            , "anderson vargas;"
            , "anderson vargas;"
            , "marcelo cabral;"
            , "thiago zenker;"
            , "luci jorge;"
            , "larissa bem;"
            , "tiago cirqueira;"
            , "peter oliveira;"
            , "lua hernandez;"
        ]
    }, //SEGUNDAS E QUARTAS
    gradeProg: {
        item: `<li class="fa pointer" onclick="javascript:mailToss('gradeProg')"><span class="notfa"> Grades de Programação</span></li>`
        , assunto: "GRADE DE PROGRAMAÇÃO RBS TV - " + dateNow
        , emails: [
          "CoordenacaoRBSTV@gruporbs.onmicrosoft.com;"
            ,"UsuariosTVPortoAlegre@gruporbs.onmicrosoft.com;"
            , "alessandra.souza@sky.com.br;"
            , "alexssandro.santos@netservicos.com.br;"
            , "almanaque@diariosm.com.br;"
            , "ana.leticia@an.com.br;"
            , "anacl@diariopopular.com.br;"
            , "Andrea.leo@netservicos.com.br;"
            , "donadio;"
            , "bruna trubian;"
            , "celsobgp@gmail.com;"
            , "chico.izidro@correiodopovo.com.br;"
            , "coordenadoresoperacaorbstvet.com.gruporbs.onmicrosoft.com;"
            , "CoordenadoresTecnicosInterior@gruporbs.onmicrosoft.com;"
            , "cybele.miranda@rdgaucha.com.br;"
            , "debora pradella;"
            , "elisabeth.quadros@t.com.com.br;"
            , "ernesto.nunes@gruporbs.mail.onmicrosoft.com;"
            , "esportes@correiodopovo.com.br;"
            , "felipe.minozzi@flyingfishes.com.br;"
            , "gradesdeprogramacao@sky.com.br;"
            , "guiaeletronico@gvt.com.br;"
            , "guiatv;"
            , "Guilherme.michelini@netservicos.com.br;"
            , "hojenatv@zerohora.com.br;"
            , "jairo lacks;"
            , "Joao.Bressan@netservicos.com.br;"
            , "karen.sinhor@diario.com.br;"
            , "leonardo persigo;"
            , "potter@atlantida.com.br;"
            , "luizgonzaga@correiodopovo.com.br;"
            , "marcelo perrone;"
            , "marcelo rech;"
            , "matheus carvalho;"
            , "michele pradella;"
            , "norton fabrizzio;"
            , "OPECTVRioGrandedoSul@gruporbs.onmicrosoft.com;"
            , "paty@diariopopular.com.br;"
            , "paula@diariopopular.com.br;"
            , "redacaovs@gruposinos.com.br;"
            , "revel@revistaeletronica.com.br;"
            , "rogerio.giaretta@diariosm.com.br;"
            , "rosangela monteiro;"
            , "rosangela rodrigues;"
            , "rosinel@jornaldopovo.com.br;"
            , "roteironh@gruposinos.com.br;"
            , "siliane.vieira@pioneiro.com;"
            , "sulmix@sulmix.com.br;"
            , "ticiano osorio;"
            , "tmsgrades@tribune.com;"
            , "vania.jensen@rovicorp.com;"
            , "variedades@diariosm.com.br;"
            , "vivian.cunha@t.com.com.br;"
            , "adriano vargas;"
            , "revel@revistaeletronica.com.br;"
            , "jose barros;"
            , "jeanpresser@gmail.com;"
            , "redacaovs@gruposinos.com.br;"
            , "brasil@rovicorp.com;"
            , "fernando.costa@revistaeletronica.com.br;"
            , "tmsgrades@gracenote.com;"
            , "lulacerda@gracenote.com;"
            , "babreu@gracenote.com;"
            , "jsiqueira@gracenote.com;"
            , "lprauchner@correiodopovo.com.br;"
            , "msantuario@correiodopovo.com.br;"
            , "roteirotv@pampa.com.br;"
            , "lprauchner@correiodopovo.com.br;"
            , "revista@nexcabo.com.br;"
            , "digitacao2@nexcabo.com.br;"
            , "brasil@rovicorp.com;"
            , "nexcabo@gmail.com;"
            , "tatiana issler;"
            , "thais pacheco;"
            , "eduardo castilhos;"
            , "lvicente@correiodopovo.com.br;"



        ]
    }
}
var week = [
    //DOMINGO
    [
        mailing.progReport.item
        , mailing.mediaCham.item
        , mailing.previaCAM.item
    ]
    , //SEGUNDA
    [
        mailing.progReport.item
        , mailing.mediaCham.item
        , mailing.fades.item
        , mailing.stock.item
        , mailing.previaHora.item
        , mailing.previaENC.item
        , mailing.previaIBOPEdata.item
        , mailing.gradeProg.item
    ]
    , //TERÇA
    [
        mailing.progReport.item
        , mailing.mediaCham.item
        , mailing.fades.item
        , mailing.stock.item
        , mailing.previaHora.item
        , mailing.previaENC.item
        , mailing.previaIBOPEdata.item
    ]
    , //QUARTA
    [
        mailing.progReport.item
        , mailing.mediaCham.item
        , mailing.fades.item
		 , mailing.stock.item
        , mailing.previaHora.item
        , mailing.previaENC.item
        , mailing.previaIBOPEdata.item
        , mailing.planPROG.item
        , mailing.gradeProg.item
    ]
    , //QUINTA
    [
        mailing.progReport.item
        , mailing.mediaCham.item
        , mailing.fades.item
        , mailing.stock.item
        , mailing.previaHora.item
        , mailing.previaENC.item
        , mailing.previaIBOPEdata.item
    ]
    , //SEXTA
    [
        mailing.progReport.item
        , mailing.mediaCham.item
        , mailing.fades.item
        , mailing.stock.item
        , mailing.previaHora.item
        , mailing.previaENC.item
        , mailing.previaIBOPEdata.item
        , mailing.mapaCorte.item
    ]
    , //SÁBADO
    [
        mailing.progReport.item
        , mailing.mediaCham.item
        , mailing.fades.item
        , mailing.previaIBOPEsab.item
        , mailing.espacoRedacao.item
    ]
]
