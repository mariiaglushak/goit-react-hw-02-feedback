import PropTypes from 'prop-types'
import css from "./Sections.module.css"



const Sections = ({ title, children }) => {
    return (
        <section className={css.section}>
            <h1 className={css.sectionsTitle}>{title}</h1>
            {children}
        </section>
    );
    
}
export default Sections

Sections.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
}