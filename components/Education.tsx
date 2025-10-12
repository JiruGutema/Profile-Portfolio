export default function Education() {
  return (
    <section>
      <h2 className="text-3xl font-bold font-serif  border-border pb-2 mb-4">
        Education
      </h2>
      <div className="space-y-4">
        <article>
          <h3 className="text-xl font-semibold font-serif">
            BSc in Software Engineering
          </h3>
          <p className="text-base italic text-muted-foreground">
            Addis Ababa University | 01/2023 – 09/2027
          </p>
          <p className="text-base italic text-muted-foreground">
            Addis Ababa, Ethiopia
          </p>
          <ul className="list-disc list-inside text-base mt-2">
            <li>
              <strong className="italic">Coursework: </strong>Web Development,
              Mobile Application (Flutter), Fundamental of Software Engineering,
              Data Structures and Algorithms, Operating System, Computer
              Architecture, Object Oriented Programming, Software Development, .
            </li>
          </ul>
        </article>
        <article>
          <h3 className="text-xl font-semibold font-serif">
            Coding Academy (backed by Google)
          </h3>
          <p className="text-base italic text-muted-foreground">
            African to Silicon Valley | 01/2025 – 04/2025
          </p>
          <p className="text-base italic text-muted-foreground">
            Addis Ababa, Ethiopia
          </p>
          <ul className="list-disc list-inside text-base mt-2">
            <li>
              <strong className="italic">Coursework: </strong>Advanced Data
              structures and Algorithms (Graph and Tree Algorithms, Dynamic
              Programming, Advanced String Algorithms).
            </li>
          </ul>
        </article>
        <article>
          <h3 className="text-xl font-semibold font-serif">
            Introduction to Cyber Security and Cryptography
          </h3>
          <p className="text-base italic text-muted-foreground">
            INSA Summer Program | 11/2024 – 01/2025
          </p>
          <p className="text-base italic text-muted-foreground">
            Addis Ababa, Ethiopia
          </p>
          <ul className="list-disc list-inside text-base mt-2">
            <li>
              <strong className="italic">Courses:</strong> Introduction to Cyber
              Security and Ethical Hacking, Introduction to Cryptography.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
