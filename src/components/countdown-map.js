import Navbar from "./navbar"
import NavbarPom from "./navbar_pomona"

const CountDownMap = () => {
    return (
        <div>
            <NavbarPom />
            <div className="lyon-box">
                <h1>Harwood</h1>
                <div className="washers-box">
                    <h1>Washers</h1>
                    <div className="countdown-box-cover">
                        <div className="countdown-box one red">
                            <div>#1</div>
                            <div className="countdown-clock">12:30 left</div>
                        </div>
                        <div className="countdown-box one green">
                            <div>#1</div>
                            <h3>READY</h3>
                        </div>
                        <div className="countdown-box one red">
                            <div>#1</div>
                            <div className="countdown-clock">12:30 left</div>
                        </div>
                        <div className="countdown-box one green">
                            <div>#1</div>
                            <h3>READY</h3>
                        </div>
                        <div className="countdown-box one red">
                            <div>#1</div>
                            <div className="countdown-clock">12:30 left</div>
                        </div>
                        <div className="countdown-box one green">
                            <div>#1</div>
                            <h3>READY</h3>
                        </div>
                        <div className="countdown-box one yellow">
                            <div>#1</div>
                            <h3>OUT OF ORDER</h3>
                        </div>
                    </div>
                </div>
                <div className="dryers-box">
                    <h1>Dryers</h1>
                    <div className="countdown-box-cover">
                        <div className="countdown-box one red">
                            <div>#1</div>
                            <div className="countdown-clock">12:30 left</div>
                        </div>
                        <div className="countdown-box one green">
                            <div>#1</div>
                            <h3>READY</h3>
                        </div>
                        <div className="countdown-box one red">
                            <div>#1</div>
                            <div className="countdown-clock">12:30 left</div>
                        </div>
                        <div className="countdown-box one green">
                            <div>#1</div>
                            <h3>READY</h3>
                        </div>
                        <div className="countdown-box one red">
                            <div>#1</div>
                            <div className="countdown-clock">12:30 left</div>
                        </div>
                        <div className="countdown-box one green">
                            <div>#1</div>
                            <h3>READY</h3>
                        </div>
                        <div className="countdown-box one yellow">
                            <div>#1</div>
                            <h3>OUT OF ORDER</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountDownMap