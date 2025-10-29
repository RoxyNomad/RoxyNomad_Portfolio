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
          <td>Express, NestJS, PostgreSQL</td>
        </tr>
        <tr>
          <td>☁️ Database</td>
          <td>PostgreSQL, MongoDB Atlas, Supabase</td>
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
