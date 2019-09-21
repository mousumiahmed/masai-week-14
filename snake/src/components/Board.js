import React from "react";
import ReactDom from "react-dom";
import styles from './App.css'




export default class Board extends React.Component {
    constructor(props){
        super(props);
        this.setState={

        }
    }

    render(){
        return(
            <div>
              <table class="table table-hover table-dark table-sm text-center ">
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td style={{backgroundColor:"#FF9C33"}}>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>9</td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>2</td>
                    <td>3</td>
                    <td style={{backgroundColor:"#FF9C33"}}>4</td>
                    <td>5</td>
                    <td style={{backgroundColor:"#FF9C33"}}>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>9</td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>2</td>
                    <td style={{backgroundColor:"#FF9C33"}}>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td style={{backgroundColor:"#FF9C33"}}>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>9</td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td style={{backgroundColor:"#FF9C33"}}>6</td>
                    <td>7</td>
                    <td style={{backgroundColor:"#FF9C33"}}>8</td>
                    <td>9</td>
                    <td>9</td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td style={{backgroundColor:"#FF9C33"}}>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td style={{backgroundColor:"#FF9C33"}}>9</td>
                    <td>9</td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>2</td>
                    <td>3</td>
                    <td style={{backgroundColor:"#FF9C33"}}>4</td>
                    <td>5</td>
                    <td style={{backgroundColor:"#FF9C33"}}>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>9</td>
                    </tr>
                    <tr>
                    <th scope="row">40</th>
                    <td>39</td>
                    <td style={{backgroundColor:"#FF9C33"}}>38</td>
                    <td>37</td>
                    <td>36</td>
                    <td>35</td>
                    <td style={{backgroundColor:"#FF9C33"}}>34</td>
                    <td>33</td>
                    <td>32</td>
                    <td>31</td>
                    </tr>
                    <tr>
                    <th scope="row">30</th>
                    <td style={{backgroundColor:"#FF9C33"}}>29</td>
                    <td>28</td>
                    <td style={{backgroundColor:"#FF9C33"}}>27</td>
                    <td>26</td>
                    <td>25</td>
                    <td>24</td>
                    <td>23</td>
                    <td>22</td>
                    <td>21</td>
                    </tr>
                    <tr>
                    <th scope="row" style={{backgroundColor:"#FF9C33"}}>20</th>
                    <td>19</td>
                    <td>18</td>
                    <td>17</td>
                    <td style={{backgroundColor:"#FF9C33"}}>16</td>
                    <td>15</td>
                    <td>14</td>
                    <td>13</td>
                    <td>12</td>
                    <td>11</td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}