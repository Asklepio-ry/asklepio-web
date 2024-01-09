import { BoardMemberCard } from "../components/BoardMemberCard";
import "../style/pages/Board.css";

export default function Board() {
  return (
    <>
      <p>
        Koko hallituksen tavoittaa sähköpostitse osoitteesta{" "}
        <a href="mailto:hallitus@asklepio.fi">hallitus@asklepio.fi</a>
      </p>
      <br />
      <p>Henkilökohtaiset sähköpostiosoitteet etunimi.sukunimi@asklepio.fi</p>
      <h3>Hallitus 2024</h3>
      <section className="board-member-list">
        <div className="card-column">
          <BoardMemberCard
            name="Maria Säilä"
            title="Puheenjohtaja, kiltahuonevastaava"
            email="maria.saila@asklepio.fi"
            telegram="mariasaila"
          />
          <BoardMemberCard
            name="Charlotta Huima"
            title="Varapuheenjohtaja, viestintävastaava"
            email="charlotta.huima@asklepio.fi"
            // telegram="charlotta huima"
          />
          <BoardMemberCard
            name="Eeli Hinkka"
            title="Sihteeri"
            email="eeli.hinkka@asklepio.fi"
            telegram="eelihinkka"
          />
          <BoardMemberCard
            name="Matilda Laurila"
            title="Taloudenhoitaja"
            email="matilda.laurila@asklepio.fi"
            telegram="matskuuuw"
          />
          <BoardMemberCard
            name="Silja Kuusirati"
            title="Tapahtumavastaava"
            email="silja.kuusirati@asklepio.fi"
            telegram="siljakuusirati"
          />
        </div>
        <div className="card-column">
          <BoardMemberCard
            name="Sini Lähde"
            title="Somevastaava"
            email="sini.lahde@asklepio.fi"
            telegram="sinilahde"
          />
          <BoardMemberCard
            name="Tessa Salmia"
            title="Fuksi- ja tuutorivastaava"
            email="tessa.salmia@asklepio.fi"
            telegram="padawanito"
          />
          <BoardMemberCard
            name="Saara Mäkelä"
            title="Koulutuspoliittinen vastaava"
            email="saara.makela@asklepio.fi"
            telegram="sarammbo"
          />
          <BoardMemberCard
            name="Tuukka Lehtomäki"
            title="Ulkoasianvastaava"
            email="tuukka.lehtomaki@asklepio.fi"
            telegram="lehtomakituukka"
          />
        </div>
      </section>
    </>
  );
}
