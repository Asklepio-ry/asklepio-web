import { BoardMemberCard } from "../components/BoardMemberCard";
import "../style/pages/Board.css";

export default function Board() {
  return (
    <>
      <p>
        Koko hallituksen tavoittaa sähköpostitse osoitteesta{" "}
        <a href="mailto:asklepio@utu.fi">asklepio@utu.fi</a>
      </p>
      <br />
      <p>Henkilökohtaiset sähköpostiosoitteet tunnus@utu.fi</p>
      <h3>Hallitus 2024</h3>
      <section className="board-member-list">
        <div className="card-column">
          <BoardMemberCard
            name="Jani Norrby"
            title="Puheenjohtaja, viestintävastaava"
            email="jtnorr"
            telegram="jani_norppa"
          />
          <BoardMemberCard
            name="Roosa Hietalahti"
            title="Varapuheenjohtaja"
            email="rmmhie"
            telegram="ursulamursula"
          />
          <BoardMemberCard
            name="Inka Mustajoki"
            title="Sihteeri"
            email="immust"
            telegram="inkamustajoki"
          />
          <BoardMemberCard
            name="Maria Säilä"
            title="Taloudenhoitaja"
            email="masail"
            telegram="mariasaila"
          />
          <BoardMemberCard
            name="Noora Räkköläinen"
            title="Tapahtumavastaava"
            email="nkrakk"
            telegram="noorakkolainen"
          />
        </div>
        <div className="card-column">
          <BoardMemberCard
            name="Anni Halkilahti"
            title="Kiltahuonevastaava"
            email="aahalk"
            telegram="anni_halkilahti"
          />
          <BoardMemberCard
            name="Tessa Salmia"
            title="Fuksi- ja tuutorivastaava"
            email="teemms"
            telegram="padawanito"
          />
          <BoardMemberCard
            name="Saara Mäkelä"
            title="Koulutuspoliittinen vastaava"
            email="sahanm"
            telegram="sarammbo"
          />
          <BoardMemberCard
            name="Lauri Suominen"
            title="Ulkoasianvastaava"
            email="losuom"
            telegram="suominenlauri"
          />
        </div>
      </section>
    </>
  );
}
