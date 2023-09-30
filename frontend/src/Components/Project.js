import React from "react";

const Project = (props) => {
  return (
    <>
      <div
        className="card"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <div className="card-body">
        {/* <div class="icon">Abc</div */}
          <p className="headings">Title</p>
          <h6 className="value">
            {props.project.project_title.length > 0
              ? props.project.project_title.length > 30
                ? props.project.project_title.substring(0, 30) + "..."
                : props.project.project_title
              : "-"}
          </h6>
          <p className="headings">Project.Technologies</p>
          <p className="value">
            {props.project.project_technologies.length > 0
              ? props.project.project_technologies.length > 30
                ? props.project.project_technologies.substring(0, 30) + "..."
                : props.project.project_technologies
              : "-"}
          </p>
          <p className="headings">Technical_Skillset.Frontend</p>
          <p className="value">
            {props.project.project_skillset_frontend.length > 0
              ? props.project.project_skillset_frontend.length > 30
                ? props.project.project_skillset_frontend.substring(0, 30) +
                  "..."
                : props.project.project_skillset_frontend
              : "-"}
          </p>
          <p className="headings">Technical_Skillset.Backend</p>
          <p className="value">
            {props.project.project_skillset_backend.length > 0
              ? props.project.project_skillset_backend.length > 30
                ? props.project.project_skillset_backend.substring(0, 30) +
                  "..."
                : props.project.project_skillset_backend
              : "-"}
          </p>
          <p className="headings">Technical_Skillset.Database</p>
          <p className="value">
            {props.project.project_skillset_database.length > 0
              ? props.project.project_skillset_database.length > 30
                ? props.project.project_skillset_database.substring(0, 30) +
                  "..."
                : props.project.project_skillset_database
              : "-"}
          </p>
          <p className="headings">Technical_Skillset.Infrastructure</p>
          <p className="value">
            {props.project.project_skillset_infrastructure.length > 0
              ? props.project.project_skillset_infrastructure.length > 30
                ? props.project.project_skillset_infrastructure.substring(
                    0,
                    30
                  ) + "..."
                : props.project.project_skillset_infrastructure
              : "-"}
          </p>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            {props.project.project_title}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <hr style={{ width: "80%", textAlign: "center", marginLeft: 5, color:"grey" }} />
        <div className="offcanvas-body">
            <a><i className="headings1 fa-regular fa-rectangle-list"></i>&nbsp; Title</a>
            <p className="value">{props.project.project_title}</p>

            <a><i className="headings1 fa-regular fa-rectangle-list"></i>&nbsp; Project.Technologies</a>
            <p className="value">{props.project.project_technologies.length > 0 ? props.project.project_technologies : '-'}</p>

            <a><i className="headings1 fa-regular fa-rectangle-list"></i>&nbsp; Technical_Skillset.Frontend</a>
            <p className="value">{props.project.project_skillset_frontend.length > 0 ? props.project.project_skillset_frontend : '-'}</p>

            <a><i className="headings1 fa-regular fa-rectangle-list"></i>&nbsp; Technical_Skillset.Backend</a>
            <p className="value">{props.project.project_skillset_backend.length > 0 ? props.project.project_skillset_backend : '-'}</p>

            <a><i className="headings1 fa-regular fa-rectangle-list"></i>&nbsp; Technical_Skillset.Database</a>
            <p className="value">{props.project.project_skillset_database.length > 0 ? props.project.project_skillset_database : '-'}</p>

            <a><i className="headings1 fa-regular fa-rectangle-list"></i>&nbsp; Technical_Skillset.Infrastructure</a>
            <p className="value">{props.project.project_skillset_infrastructure.length > 0 ? props.project.project_skillset_infrastructure : '-'}</p>

            <a><i className="headings1 fa-regular fa-rectangle-list"></i>&nbsp; Other_Information.Availability</a>
            <p className="value">{props.project.other_information_availability.length > 0 ? props.project.other_information_availability : '-'}</p>
        </div>
      </div>
    </>
  );
};

export default Project;
