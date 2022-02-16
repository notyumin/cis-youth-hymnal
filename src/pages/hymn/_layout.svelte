<script>
  import { params } from "@roxi/routify";

  let hymnNo = $params.hymnNo;
</script>

<div class="header">
  <p>
    <!-- TODO For responsiveness, don't show Title below certain width -->
    Hymn <span class="highlight-text">{hymnNo}</span>: You Are My Strength
  </p>
</div>
<slot class="body" />

<style>
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 69px;
    background-color: #a496ff;
    font-size: 25px;
    color: white;
    font-weight: 700;
  }

  .highlight-text {
    color: #ffec96;
  }

  .body {
    margin-top: 30px;
    padding: 30px;
  }
</style>
