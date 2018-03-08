<%# comment
<% data.foreach(portfolio => { %>
<div class="portfolio">
  <h4>
    <a href="<% `/portfolio/${portfolio.id}` %>">
  <%= portfolio.title %>
    </a>
  </h4>
  <p><%= portfolio.description %></p>
</div>
<% }) %>
%>




<%# views/movies/index.ejs %>

<h1>All the movies</h1>

<% movies.forEach(movie => { %>
  <div class="movie">
    <h4>
      <a href="<%= `/movies/${movie.id}` %>">
        <%= movie.title %>
      </a>
    </h4>
    <p><%= movie.description %></p>
  </div>
<% }) %>


<% portfolio.forEach(portfolio => { %>
<div class="portfolio-item">
  <h4>
    <a href="<%= `/portfolio/${portfolio.id}` %>">
  <%= portfolio.title %>
    </a>
  </h4>
  <p><%= portfolio.description %></p>
</div>
<% }) %>
%>
