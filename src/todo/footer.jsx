import '../assets/styles/footer.styl'

export default {
    data() {
        return {
            wish: 'Make the world better',
        }
    },
    render() {
        return (
            <div id="footer">
                <span>  {this.wish}</span>
            </div>
        )
    }
}