import styles from "@/styles/components/_skillsTable.module.scss";

const SkillsTable = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Category</th>
          <th>Technologies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🌐 Frontend</td>
          <td>React, Next.js, TypeScript, SCSS</td>
        </tr>
        <tr>
          <td>⚙️ Backend</td>
          <td>Express, NestJS, Python</td>
        </tr>
        <tr>
          <td>☁️ Database & ORM</td>
          <td>PostgreSQL, NeonDB, Supabase, MongoDB Atlas, Drizzle ORM</td>
        </tr>
        <tr>
          <td>🏛️ Architecture</td>
          <td>CQRS, DDD, Clean Code</td>
        </tr>
        <tr>
          <td>🎨 Design</td>
          <td>Figma, Branding, Responsive Design</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SkillsTable;