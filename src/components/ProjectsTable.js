
// Define a template component
const ProjectsTable = () => {
  return (
    <div className="w-full p-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Employer</th>
              <th>Project</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>Byte Cloud Services</th>
              <th>OrangeProAi</th>
              <td>Developed a website for a client. Focused on frontend work and API integration. Used ReactJS, TailwindCSS, and DaisyUI.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;