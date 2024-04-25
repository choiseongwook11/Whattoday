import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styles from './MyPageEdit.module.css';
import github_image from './asset/github_logo.png';
import google_image from './asset/google_logo.png'
import null_image from './asset/logo.png'
import { getAuth } from 'firebase/auth';

function MyPageEdit() {
    const navigate = useNavigate();

    const githubUserPhotoURL = sessionStorage.getItem('githubUserPhotoURL');
    const googleUserPhotoURL = sessionStorage.getItem('googleUserPhotoURL');

    const googleUserEmail = sessionStorage.getItem('googleUseremail')
    const githubUserEmail = sessionStorage.getItem('githubUseremail')

    const [showDropdown, setShowDropdown] = useState(false);
    
    const [fontSize, setFontSize] = useState('32px');

    const handleLogout = () => {
      sessionStorage.clear();
      getAuth().signOut();
      navigate('/');
    };

    useEffect(() => {
        if (googleUserEmail?.length > 20 || githubUserEmail?.length > 20) {
            setFontSize('28px');
        } else {
            setFontSize('32px');
        }
    }, [googleUserEmail, githubUserEmail]);
    
    console.log(googleUserEmail)
    console.log(githubUserEmail)

    return(
      <div>
            <header className={styles.all}>
                <div className={styles['head-box']}>
                    <div className={styles['head-text']}>
                    <div className={styles["head-text-img"]}></div>
                    <a href="/mainlin" className={styles.click}>오늘 뭐해?</a>
                </div>
                    <div className={styles['header-right-text-box']}>
                        <div className={styles['header-right-text']} onClick={() => navigate("/login")}><div className={styles.click}>캘린더</div></div>
                        <div className={styles['header-right-text']} onClick={() => navigate("/login")}><div className={styles.click}>급식표</div></div>
                        <div className={styles['header-right-text']} onClick={() => navigate("/login")}><div className={styles.click}>시간표</div></div>
                    </div>
                </div>
                <div className={styles['header-right-image-box']}>
                  <div className={styles['header-right-profile']} onClick={() => setShowDropdown(!showDropdown)}><div className={styles.click}>
                        <div className={styles['profile-box']}>
                          <img className={styles['profile-image']} src={googleUserPhotoURL == null && githubUserPhotoURL == null ? null_image : googleUserPhotoURL || githubUserPhotoURL} alt='profile_image'></img>
                        </div>
                      </div>
                    </div>
                </div>
            </header>
            <section className={styles['main-all']}>
                <div className={styles['main-background']}>
                  <div className={styles['main-box']}>
                  {showDropdown && (
                      <div className={styles['profile-menu']}>
                        <div class={styles["profile-menu-item"]} onClick={() => navigate('/MyPage')}>
                            프로필 보기
                        </div>
                        <div class={styles["profile-menu-item"]} onClick={handleLogout}>
                            로그아웃
                        </div>
                      </div>
                  )}
                      <div className={styles['main-profile-box']}>
                        <img className={styles['main-profile-image']} src={googleUserPhotoURL == null && githubUserPhotoURL == null ? null_image : googleUserPhotoURL || githubUserPhotoURL} alt='profile_image'></img>
                      </div>
                      <div className={styles['main-profile-name-edit']}>
                        수정
                      </div>
                      <div className={styles['main-profile-name']}>
                        최현우<span>님</span>
                      </div>
                      <div className={styles['main-profile-edit-search']}>
                        학교 검색하기
                      </div>
                      <div className={styles['main-profile-edit-add']}>
                        학교랑 먼저 연동해 주세요
                      </div>
                      <div className={styles['main-profile-edit']}>
                        프로필 수정
                      </div>
                      <div className={styles['main-profile-edit-account']}>
                        <div className={styles['main-profile-edit-account-title']}>연결된 계정</div>
                        <img className={styles['main-profile-edit-account-google-img']} src={google_image} alt='google_image'></img>
                        <img className={styles['main-profile-edit-account-github-img']} src={github_image} alt='github_image'></img>
                        <div className={styles['main-profile-edit-account-google']} style={{ fontSize: fontSize }}>{googleUserEmail?.length > 1 ? googleUserEmail: '연결되어 있지 않음'}</div>
                        <div className={styles['main-profile-edit-account-github']} style={{ fontSize: fontSize }}>{githubUserEmail?.length > 1 ? githubUserEmail: '연결되어 있지 않음'}</div>
                        <div className={styles['main-profile-unlink-account']}><div className={styles['main-profile-unlink-account-text']}>연결 끊기</div></div>
                        <div className={styles['main-profile-link-account']}><div className={styles['main-profile-link-account-text']}>연동 하기</div></div>
                      </div>
                      
                  </div>
                </div>
            </section>
        </div>
    );
}

export default MyPageEdit;