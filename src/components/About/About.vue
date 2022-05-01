<!--
#======================================================#
# + Projet: Principal Component Analysis automation    #
# + Date:   04/2022                                    #
# + Description: Return PCA and infos by and CSV or    #
# XLSX that was given by user                          #
# + Author: Thiago Piovesan                            #
#======================================================#
# Libs importation:
-->
<template>
  <div class="main">
    <v-container>
        <v-layout column>
            <!-- <v-flex  class="display-1 text-xs-center my-5">What is PCA?</v-flex> -->

            <v-flex>
              <div class="headline mt-3"># Objective:</div>
              <p class="steps">→ This project has the main pourpose of understand and test the methods and functions developed to execute an PCA implementation in an "Excel" file (planilha).<br></p>
              <div class="headline mt-3"># How does it work?</div>
              <p class="steps">→ You can simply Upload your file on this web application and it will procress the file and get you back the response of that data after the PCA.<br></p>
              <p class="steps">→ To get it start, just click on "Sparta" on top-left, after that click on "Upload your file here!" select your file and click on "Upload" button.<br></p>
              <p class="steps">→ After that, you will see the response of the PCA and the infos about the data.<br></p>

              <p class="steps">→ If you don't have a dataset to use, one can be download at: <a href="https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data">Example Dataset</a><br></p>  
            </v-flex>
            <br><hr>       

            <v-flex>
              <div class="headline mt-3"># What is PCA?</div>
              <p class="steps">
                → PCA is used in applications when you have big data that might have some statistical distribution and you want to uncover the low dimensional patterns to build models off of it. <br>
              </p>
            </v-flex>
            <br><hr>
            <v-flex>
              <div class="headline mt-3"># Steps to execute PCA:</div>
              <p class="steps">
              <b>  1. Compute mean row. </b><br>
              </p>
              <p class="steps">
              <b>  2. Subtract mean from the main (original) data: B = x_matrix - x_matrix_hat: </b><br>
                → Subtract the mean of each variable from the dataset so that the dataset should be centered on the origin.  <br>
              </p>
              <p class="steps">              
              <b>  3. Covariance matrix of the rows of B: </b><br>
                → Calculate the Covariance Matrix of the mean-centered data. The covariance matrix is a square matrix denoting the covariance of the elements with each other. <br>
              </p>
              <p class="steps">
              <b>  4. Compute Eigenvalues and Eigenvectors of C: </b><br>
                → The Eigenvectors of the Covariance matrix we get are Orthogonal to each other and each vector represents a principal axis. <br>
                → A Higher Eigenvalue corresponds to a higher variability. Hence the principal axis with the higher Eigenvalue will be an axis capturing higher variability in the data. <br>
                → Orthogonal means the vectors are mutually perpendicular to each other. Eigenvalues and vectors seem to be very scary until we get the idea and concepts behind it. <br>
              </p>
              <p class="steps">
              <b>  5. Principal component: T = BV </b><br>
              </p>

              <p class="steps">
              <b>  + Essentially what you do is: </b><br>
                → Decompose this matrix into kind of directions of maximal variance just like in the singular value decomposition, called the Principal component. And the Loadings are king of how much of each of those principal components each of the experiments has the loadings in a particular experiment of those principal components columns. <br>
              </p>
            <br><hr>       
            </v-flex>
            <v-flex>
              <div class="headline mt-3"># Concepts and Languages used:</div>
              <p class="steps">
                - VUE.js; <br>
                - Flask API; <br>
                - Python; <br>
                - Vercel (Front-end) - <a href="https://vercel.com/">Vercel</a>; <br>
                - Heroku (Back-end) - <a href="https://www.heroku.com/">Heroku</a>. <br>
              </p>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
</script>

<style lang='scss' scoped>
.main {
  margin-top: 2%;
  margin-left: 22%;
  width: 70%;
}
.steps {
  text-align: justify;
}
p {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: black;
  padding-top: 22px;
}
.headline {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: black;
  text-align: left;
  margin-left: 3%;
  font-weight: bold;
}
</style>